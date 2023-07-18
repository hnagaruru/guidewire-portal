package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "BOPCededPremium.eti;BOPCededPremium.eix;BOPCededPremium.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface BOPCededPremiumInternal extends com.guidewire._generated.entity.RetireableInternal, com.guidewire._generated.entity.RICededPremiumInternal, com.guidewire._generated.entity.FrozenSetMemberInternal, gw.api.reinsurance.RICededPremiumAdapter {
  /**
   * Adds the given element to the CedingHistory array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToCedingHistory(entity.BOPCededPremiumHistory element);
  
  
  /**
   * Adds the given element to the CedingTransactions array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToCedingTransactions(entity.BOPCededPremiumTransaction element);
  
  
  /**
   * Gets the value of the BOPCost field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.BOPCost getBOPCost();
  
  
  public gw.pl.persistence.core.Key getBOPCostID();
  
  
  /**
   * Gets the value of the CedingHistory field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.BOPCededPremiumHistory[] getCedingHistory();
  
  
  /**
   * Gets the value of the CedingTransactions field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.BOPCededPremiumTransaction[] getCedingTransactions();
  
  
  /**
   * Removes the given element from the CedingHistory array. This is achieved by marking the element for removal.
   */
  public void removeFromCedingHistory(entity.BOPCededPremiumHistory element);
  
  
  /**
   * Removes the given element from the CedingHistory array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromCedingHistory(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the CedingTransactions array. This is achieved by marking the element for removal.
   */
  public void removeFromCedingTransactions(entity.BOPCededPremiumTransaction element);
  
  
  /**
   * Removes the given element from the CedingTransactions array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromCedingTransactions(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Sets the value of the BOPCost field.
   */
  public void setBOPCost(entity.BOPCost value);
  
  
  public void setBOPCostID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the CedingHistory field.
   */
  public void setCedingHistory(entity.BOPCededPremiumHistory[] value);
  
  
  /**
   * Sets the value of the CedingTransactions field.
   */
  public void setCedingTransactions(entity.BOPCededPremiumTransaction[] value);
  
  
  
}