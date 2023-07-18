package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "AllowedPaymentMethod.eti;AllowedPaymentMethod.eix;AllowedPaymentMethod.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface AllowedPaymentMethodInternal extends com.guidewire._generated.entity.RetireableInternal, com.guidewire._generated.entity.ExtractableInternal, com.guidewire._generated.entity.FrozenSetMemberInternal {
  /**
   * Gets the value of the PaymentMethod field.
   * Payment Method
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.AccountPaymentMethod getPaymentMethod();
  
  
  /**
   * Gets the value of the PaymentPlan field.
   * The payment plan summary
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PaymentPlanSummary getPaymentPlan();
  
  
  public gw.pl.persistence.core.Key getPaymentPlanID();
  
  
  /**
   * Sets the value of the PaymentMethod field.
   */
  public void setPaymentMethod(typekey.AccountPaymentMethod value);
  
  
  /**
   * Sets the value of the PaymentPlan field.
   */
  public void setPaymentPlan(entity.PaymentPlanSummary value);
  
  
  public void setPaymentPlanID(gw.pl.persistence.core.Key value);
  
  
  
}