package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "BACededPremiumTransaction.eti;BACededPremiumTransaction.eix;BACededPremiumTransaction.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface BACededPremiumTransactionInternal extends com.guidewire._generated.entity.RetireableInternal, com.guidewire._generated.entity.RICededPremiumTransactionInternal, com.guidewire._generated.entity.FrozenSetMemberInternal, gw.api.reinsurance.RICededPremiumTxnAdapter {
  /**
   * Gets the value of the BACededPremium field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.BACededPremium getBACededPremium();
  
  
  /**
   * Gets the value of the BACededPremiumHistory field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.BACededPremiumHistory getBACededPremiumHistory();
  
  
  public gw.pl.persistence.core.Key getBACededPremiumHistoryID();
  
  
  public gw.pl.persistence.core.Key getBACededPremiumID();
  
  
  /**
   * Sets the value of the BACededPremium field.
   */
  public void setBACededPremium(entity.BACededPremium value);
  
  
  /**
   * Sets the value of the BACededPremiumHistory field.
   */
  public void setBACededPremiumHistory(entity.BACededPremiumHistory value);
  
  
  public void setBACededPremiumHistoryID(gw.pl.persistence.core.Key value);
  
  
  public void setBACededPremiumID(gw.pl.persistence.core.Key value);
  
  
  
}