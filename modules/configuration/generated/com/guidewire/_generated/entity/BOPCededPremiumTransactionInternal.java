package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "BOPCededPremiumTransaction.eti;BOPCededPremiumTransaction.eix;BOPCededPremiumTransaction.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface BOPCededPremiumTransactionInternal extends com.guidewire._generated.entity.RetireableInternal, com.guidewire._generated.entity.RICededPremiumTransactionInternal, com.guidewire._generated.entity.FrozenSetMemberInternal, gw.api.reinsurance.RICededPremiumTxnAdapter {
  /**
   * Gets the value of the BOPCededPremium field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.BOPCededPremium getBOPCededPremium();
  
  
  /**
   * Gets the value of the BOPCededPremiumHistory field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.BOPCededPremiumHistory getBOPCededPremiumHistory();
  
  
  public gw.pl.persistence.core.Key getBOPCededPremiumHistoryID();
  
  
  public gw.pl.persistence.core.Key getBOPCededPremiumID();
  
  
  /**
   * Sets the value of the BOPCededPremium field.
   */
  public void setBOPCededPremium(entity.BOPCededPremium value);
  
  
  /**
   * Sets the value of the BOPCededPremiumHistory field.
   */
  public void setBOPCededPremiumHistory(entity.BOPCededPremiumHistory value);
  
  
  public void setBOPCededPremiumHistoryID(gw.pl.persistence.core.Key value);
  
  
  public void setBOPCededPremiumID(gw.pl.persistence.core.Key value);
  
  
  
}