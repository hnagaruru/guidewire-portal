package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "CommissionPlan.eti;CommissionPlan.eix;CommissionPlan.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface CommissionPlanInternal extends com.guidewire._generated.entity.VersionableInternal {
  /**
   * Gets the value of the CommissionPlanID field.
   * Commission Plan Public ID in Billing System
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getCommissionPlanID();
  
  
  /**
   * Gets the value of the Currency field.
   * The allowed Currency of this producer code.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.Currency getCurrency();
  
  
  /**
   * Gets the value of the ProducerCode field.
   * The ProducerCode.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.ProducerCode getProducerCode();
  
  
  public gw.pl.persistence.core.Key getProducerCodeID();
  
  
  /**
   * Sets the value of the CommissionPlanID field.
   */
  public void setCommissionPlanID(java.lang.String value);
  
  
  /**
   * Sets the value of the Currency field.
   */
  public void setCurrency(typekey.Currency value);
  
  
  /**
   * Sets the value of the ProducerCode field.
   */
  public void setProducerCode(entity.ProducerCode value);
  
  
  public void setProducerCodeID(gw.pl.persistence.core.Key value);
  
  
  
}