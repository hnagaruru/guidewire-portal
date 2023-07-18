package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "BOPCededPremiumHistory.eti;BOPCededPremiumHistory.eix;BOPCededPremiumHistory.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface BOPCededPremiumHistoryInternal extends com.guidewire._generated.entity.RetireableInternal, com.guidewire._generated.entity.RICededPremiumHistoryInternal, com.guidewire._generated.entity.FrozenSetMemberInternal {
  /**
   * Gets the value of the BOPCededPremium field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.BOPCededPremium getBOPCededPremium();
  
  
  public gw.pl.persistence.core.Key getBOPCededPremiumID();
  
  
  /**
   * Sets the value of the BOPCededPremium field.
   */
  public void setBOPCededPremium(entity.BOPCededPremium value);
  
  
  public void setBOPCededPremiumID(gw.pl.persistence.core.Key value);
  
  
  
}