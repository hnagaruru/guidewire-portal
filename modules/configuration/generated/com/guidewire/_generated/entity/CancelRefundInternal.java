package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "CancelRefund.eti;CancelRefund.eix;CancelRefund.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface CancelRefundInternal extends com.guidewire._generated.entity.RetireableInternal, com.guidewire._generated.entity.SimpleEffDatedInternal {
  /**
   * Gets the value of the CalculationMethod field.
   * Refund calculation method
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.CalculationMethod getCalculationMethod();
  
  
  /**
   * Gets the value of the ReasonCode field.
   * Reason for cancellation
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.ReasonCode getReasonCode();
  
  
  /**
   * Sets the value of the CalculationMethod field.
   */
  public void setCalculationMethod(typekey.CalculationMethod value);
  
  
  /**
   * Sets the value of the ReasonCode field.
   */
  public void setReasonCode(typekey.ReasonCode value);
  
  
  
}