package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "PaymentGatewayTransaction.eti;PaymentGatewayTransaction.eix;PaymentGatewayTransaction.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface PaymentGatewayTransactionInternal extends com.guidewire._generated.entity.KeyableBeanInternal, com.guidewire._generated.entity.ExtractableInternal, com.guidewire._generated.entity.FrozenSetMemberInternal {
  /**
   * Gets the value of the PolicyPeriod field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PolicyPeriod getPolicyPeriod();
  
  
  public gw.pl.persistence.core.Key getPolicyPeriodID();
  
  
  /**
   * Gets the value of the Reference field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getReference();
  
  
  /**
   * Gets the value of the SaveForFutureUse field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isSaveForFutureUse();
  
  
  /**
   * Sets the value of the PolicyPeriod field.
   */
  public void setPolicyPeriod(entity.PolicyPeriod value);
  
  
  public void setPolicyPeriodID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the Reference field.
   */
  public void setReference(java.lang.String value);
  
  
  /**
   * Sets the value of the SaveForFutureUse field.
   */
  public void setSaveForFutureUse(java.lang.Boolean value);
  
  
  
}