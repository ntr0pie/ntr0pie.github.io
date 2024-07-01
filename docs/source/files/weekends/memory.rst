Memory in latches and flip-flops
================================

How is data stored and retained in a latch?
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
* Data is stored in an initially inactive ("dead" or "cold") latch when:
        #. A suitable combination of signals is applied to the input terminals of the latch.
        #. The latch's internal structure, composed of logic gates (typically NAND or NOR gates), processes these inputs.
        #. The circuit responds by producing outputs at its terminals that reflect the value intended to be stored. 


* Data is retained in a latch through the following mechanism:
        #. Latches utilize a cross-coupled structure in their design.
        #. This cross-coupled structure allows the output values to be fed back to the input terminals.
        #. The continuous feedback and evaluation maintains the current output value, effectively "remembering" the stored data, even when the original input signals are deactivated i.e. {S,R} = {0, 0}.

* An enable signal is often added to control *when* the latch can change its state. 
        #. When the enable signal is active the latch is said to be *transparent* and is sensitive to input signals.
        #. When the enable signal is inactive the latch is said to be *opaque* and is insensitive to input signals. 
        #. This prevents unwanted state changes and enables finer control over the memory element.
        #. The enable signal also results in the inherent level sensitive nature of latches. 

* https://www.falstad.com/circuit/e-nandff.html

----

How is data stored and retained in a flip-flop?
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
* Unlike latches, flip-flops process the input signals at the edge of the clock pulse (edge sensitive).
* The data to be stored reflects at the output terminals after sometime due to the propagation delay of the underlying gates. 
* Flip-flops, like latches, use cross coupled arrangement which enable continuous feedback and evaluation, resulting in a memory effect. 
* However, the stored value only remains stored until the next clock edge, when the flip-flop samples the input signals again to reevaluate its output values, and thus its state.  
* An enable signal and mux can be used to allow the flip-flop to hold its value over multiple clock cycles. 
* https://www.falstad.com/circuit/e-clockedsrff.html

.. image:: https://static.righto.com/images/8086-flipflop/enable-flip-flop-diagram.png

----

Why are flip-flops edge sensitive unlike latches? 
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
- A master-slave D flip-flop consists of two D latches connected in series, with an inverter between their clock inputs. This configuration is key to understanding its positive edge sensitivity.

.. image:: https://static.righto.com/images/8086-flipflop/d-flip-flop-schematic.png

- Operation Sequence
        #. **Clock Low (0)**:
                * Master latch is transparent (enabled)
                * Slave latch is opaque (disabled)
                * Master samples and follows the D input
                * Slave holds its previous state

        #. **Clock Rising Edge (0 to 1 transition)**:
                * Master latch becomes opaque, storing the last sensed value by the then transparent master latch 
                * Slave latch becomes transparent
                * Stored value in master transfers to slave
                * Output Q updates to reflect the stored value

        #. **Clock High (1)**:
                * Master latch remains opaque
                * Slave latch remains transparent
                * No change in stored value or output

        #. **Clock Falling Edge (1 to 0 transition)**:
                * Master latch becomes transparent again
                * Slave latch becomes opaque, retaining its last state 
                * Master can no longer influence the slave latch 

* **Crucial Moment**: The positive (rising) edge of the clock is when data transfer occurs from master to slave.
* **Data Capture**: The master latch captures the input just before the rising edge, when it transitions from transparent to opaque.
* **Output Update**: The slave latch updates the output immediately after the rising edge, when it transitions from opaque to transparent.
* **Stability**: Once the rising edge has passed, changes in the D input do not affect the output until the next rising edge.
* **Negative Edge Irrelevance**: The falling edge doesn't cause any state change in the output, as the slave latch is already opaque at this point.
* This design ensures that the flip-flop only responds to input changes at the precise moment of the clock's rising edge, making it positive edge triggered. 
* The master-slave configuration effectively eliminates the transparency period of a simple latch, providing a stable and predictable edge-triggered behavior essential for synchronous digital systems.

----

More: `How flip-flops are implemented in the Intel 8086 processor <https://www.righto.com/2023/09/8086-flip-flops.html>`_

