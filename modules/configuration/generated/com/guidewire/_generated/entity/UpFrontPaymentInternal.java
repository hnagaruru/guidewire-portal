package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "UpFrontPayment.eti;UpFrontPayment.eix;UpFrontPayment.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface UpFrontPaymentInternal extends com.guidewire._generated.entity.RetireableInternal, com.guidewire._generated.entity.ExtractableInternal, com.guidewire._generated.entity.FrozenSetMemberInternal {
  /**
   * Gets the value of the Amount field.
   * The amount of this payment
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public gw.pl.currency.MonetaryAmount getAmount();
  
  
  /**
   * Gets the value of the Amount_amt field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getAmount_amt();
  
  
  /**
   * Gets the value of the Amount_cur field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.Currency getAmount_cur();
  
  
  /**
   * Gets the value of the Job field.
   * The Job that this payment belongs to
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.Job getJob();
  
  
  public gw.pl.persistence.core.Key getJobID();
  
  
  /**
   * Gets the value of the PaymentInstrument field.
   * A reference to the Payment Instrument
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getPaymentInstrument();
  
  
  /**
   * Gets the value of the PaymentMethod field.
   * Payment Method
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.UpFrontPaymentMethod getPaymentMethod();
  
  
  /**
   * Gets the value of the Reference field.
   * It can be the check number, the receipt number for cash or the reference from the Gateway Payment for electronic payments 
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getReference();
  
  
  /**
   * Sets the value of the Amount field.
   */
  public void setAmount(gw.pl.currency.MonetaryAmount value);
  
  
  /**
   * Sets the value of the Amount_amt field.
   */
  public void setAmount_amt(java.math.BigDecimal value);
  
  
  /**
   * Sets the value of the Amount_cur field.
   */
  public void setAmount_cur(typekey.Currency value);
  
  
  /**
   * Sets the value of the Job field.
   */
  public void setJob(entity.Job value);
  
  
  public void setJobID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the PaymentInstrument field.
   */
  public void setPaymentInstrument(java.lang.String value);
  
  
  /**
   * Sets the value of the PaymentMethod field.
   */
  public void setPaymentMethod(typekey.UpFrontPaymentMethod value);
  
  
  /**
   * Sets the value of the Reference field.
   */
  public void setReference(java.lang.String value);
  
  
  
}