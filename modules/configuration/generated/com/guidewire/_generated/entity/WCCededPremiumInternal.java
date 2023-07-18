package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "WCCededPremium.eti;WCCededPremium.eix;WCCededPremium.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface WCCededPremiumInternal extends com.guidewire._generated.entity.RetireableInternal, com.guidewire._generated.entity.RICededPremiumInternal, com.guidewire._generated.entity.FrozenSetMemberInternal, gw.api.reinsurance.RICededPremiumAdapter {
  /**
   * Adds the given element to the CedingHistory array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToCedingHistory(entity.WCCededPremiumHistory element);
  
  
  /**
   * Adds the given element to the CedingTransactions array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToCedingTransactions(entity.WCCededPremiumTransaction element);
  
  
  /**
   * Gets the value of the CedingHistory field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.WCCededPremiumHistory[] getCedingHistory();
  
  
  /**
   * Gets the value of the CedingTransactions field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.WCCededPremiumTransaction[] getCedingTransactions();
  
  
  /**
   * Gets the value of the WCCost field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.WCCost getWCCost();
  
  
  public gw.pl.persistence.core.Key getWCCostID();
  
  
  /**
   * Removes the given element from the CedingHistory array. This is achieved by marking the element for removal.
   */
  public void removeFromCedingHistory(entity.WCCededPremiumHistory element);
  
  
  /**
   * Removes the given element from the CedingHistory array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromCedingHistory(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the CedingTransactions array. This is achieved by marking the element for removal.
   */
  public void removeFromCedingTransactions(entity.WCCededPremiumTransaction element);
  
  
  /**
   * Removes the given element from the CedingTransactions array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromCedingTransactions(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Sets the value of the CedingHistory field.
   */
  public void setCedingHistory(entity.WCCededPremiumHistory[] value);
  
  
  /**
   * Sets the value of the CedingTransactions field.
   */
  public void setCedingTransactions(entity.WCCededPremiumTransaction[] value);
  
  
  /**
   * Sets the value of the WCCost field.
   */
  public void setWCCost(entity.WCCost value);
  
  
  public void setWCCostID(gw.pl.persistence.core.Key value);
  
  
  
}