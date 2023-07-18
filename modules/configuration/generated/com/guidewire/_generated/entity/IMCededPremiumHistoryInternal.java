package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "IMCededPremiumHistory.eti;IMCededPremiumHistory.eix;IMCededPremiumHistory.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface IMCededPremiumHistoryInternal extends com.guidewire._generated.entity.RetireableInternal, com.guidewire._generated.entity.RICededPremiumHistoryInternal, com.guidewire._generated.entity.FrozenSetMemberInternal {
  /**
   * Gets the value of the IMCededPremium field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.IMCededPremium getIMCededPremium();
  
  
  public gw.pl.persistence.core.Key getIMCededPremiumID();
  
  
  /**
   * Sets the value of the IMCededPremium field.
   */
  public void setIMCededPremium(entity.IMCededPremium value);
  
  
  public void setIMCededPremiumID(gw.pl.persistence.core.Key value);
  
  
  
}