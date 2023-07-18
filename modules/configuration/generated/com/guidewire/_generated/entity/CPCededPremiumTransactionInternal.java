package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "CPCededPremiumTransaction.eti;CPCededPremiumTransaction.eix;CPCededPremiumTransaction.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface CPCededPremiumTransactionInternal extends com.guidewire._generated.entity.RetireableInternal, com.guidewire._generated.entity.RICededPremiumTransactionInternal, com.guidewire._generated.entity.FrozenSetMemberInternal, gw.api.reinsurance.RICededPremiumTxnAdapter {
  /**
   * Gets the value of the CPCededPremium field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.CPCededPremium getCPCededPremium();
  
  
  /**
   * Gets the value of the CPCededPremiumHistory field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.CPCededPremiumHistory getCPCededPremiumHistory();
  
  
  public gw.pl.persistence.core.Key getCPCededPremiumHistoryID();
  
  
  public gw.pl.persistence.core.Key getCPCededPremiumID();
  
  
  /**
   * Sets the value of the CPCededPremium field.
   */
  public void setCPCededPremium(entity.CPCededPremium value);
  
  
  /**
   * Sets the value of the CPCededPremiumHistory field.
   */
  public void setCPCededPremiumHistory(entity.CPCededPremiumHistory value);
  
  
  public void setCPCededPremiumHistoryID(gw.pl.persistence.core.Key value);
  
  
  public void setCPCededPremiumID(gw.pl.persistence.core.Key value);
  
  
  
}