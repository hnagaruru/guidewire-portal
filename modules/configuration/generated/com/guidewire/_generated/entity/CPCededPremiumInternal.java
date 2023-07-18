package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "CPCededPremium.eti;CPCededPremium.eix;CPCededPremium.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface CPCededPremiumInternal extends com.guidewire._generated.entity.RetireableInternal, com.guidewire._generated.entity.RICededPremiumInternal, com.guidewire._generated.entity.FrozenSetMemberInternal, gw.api.reinsurance.RICededPremiumAdapter {
  /**
   * Adds the given element to the CedingHistory array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToCedingHistory(entity.CPCededPremiumHistory element);
  
  
  /**
   * Adds the given element to the CedingTransactions array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToCedingTransactions(entity.CPCededPremiumTransaction element);
  
  
  /**
   * Gets the value of the CPCost field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.CPCost getCPCost();
  
  
  public gw.pl.persistence.core.Key getCPCostID();
  
  
  /**
   * Gets the value of the CedingHistory field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.CPCededPremiumHistory[] getCedingHistory();
  
  
  /**
   * Gets the value of the CedingTransactions field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.CPCededPremiumTransaction[] getCedingTransactions();
  
  
  /**
   * Removes the given element from the CedingHistory array. This is achieved by marking the element for removal.
   */
  public void removeFromCedingHistory(entity.CPCededPremiumHistory element);
  
  
  /**
   * Removes the given element from the CedingHistory array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromCedingHistory(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the CedingTransactions array. This is achieved by marking the element for removal.
   */
  public void removeFromCedingTransactions(entity.CPCededPremiumTransaction element);
  
  
  /**
   * Removes the given element from the CedingTransactions array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromCedingTransactions(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Sets the value of the CPCost field.
   */
  public void setCPCost(entity.CPCost value);
  
  
  public void setCPCostID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the CedingHistory field.
   */
  public void setCedingHistory(entity.CPCededPremiumHistory[] value);
  
  
  /**
   * Sets the value of the CedingTransactions field.
   */
  public void setCedingTransactions(entity.CPCededPremiumTransaction[] value);
  
  
  
}