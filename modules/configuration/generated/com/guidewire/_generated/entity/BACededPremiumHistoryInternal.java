package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "BACededPremiumHistory.eti;BACededPremiumHistory.eix;BACededPremiumHistory.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface BACededPremiumHistoryInternal extends com.guidewire._generated.entity.RetireableInternal, com.guidewire._generated.entity.RICededPremiumHistoryInternal, com.guidewire._generated.entity.FrozenSetMemberInternal {
  /**
   * Gets the value of the BACededPremium field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.BACededPremium getBACededPremium();
  
  
  public gw.pl.persistence.core.Key getBACededPremiumID();
  
  
  /**
   * Sets the value of the BACededPremium field.
   */
  public void setBACededPremium(entity.BACededPremium value);
  
  
  public void setBACededPremiumID(gw.pl.persistence.core.Key value);
  
  
  
}