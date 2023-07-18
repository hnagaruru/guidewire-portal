package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "PACededPremium.eti;PACededPremium.eix;PACededPremium.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface PACededPremiumInternal extends com.guidewire._generated.entity.RetireableInternal, com.guidewire._generated.entity.RICededPremiumInternal, com.guidewire._generated.entity.FrozenSetMemberInternal, gw.api.reinsurance.RICededPremiumAdapter {
  /**
   * Adds the given element to the CedingHistory array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToCedingHistory(entity.PACededPremiumHistory element);
  
  
  /**
   * Adds the given element to the CedingTransactions array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToCedingTransactions(entity.PACededPremiumTransaction element);
  
  
  /**
   * Gets the value of the CedingHistory field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PACededPremiumHistory[] getCedingHistory();
  
  
  /**
   * Gets the value of the CedingTransactions field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PACededPremiumTransaction[] getCedingTransactions();
  
  
  /**
   * Gets the value of the PACost field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PACost getPACost();
  
  
  public gw.pl.persistence.core.Key getPACostID();
  
  
  /**
   * Removes the given element from the CedingHistory array. This is achieved by marking the element for removal.
   */
  public void removeFromCedingHistory(entity.PACededPremiumHistory element);
  
  
  /**
   * Removes the given element from the CedingHistory array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromCedingHistory(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the CedingTransactions array. This is achieved by marking the element for removal.
   */
  public void removeFromCedingTransactions(entity.PACededPremiumTransaction element);
  
  
  /**
   * Removes the given element from the CedingTransactions array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromCedingTransactions(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Sets the value of the CedingHistory field.
   */
  public void setCedingHistory(entity.PACededPremiumHistory[] value);
  
  
  /**
   * Sets the value of the CedingTransactions field.
   */
  public void setCedingTransactions(entity.PACededPremiumTransaction[] value);
  
  
  /**
   * Sets the value of the PACost field.
   */
  public void setPACost(entity.PACost value);
  
  
  public void setPACostID(gw.pl.persistence.core.Key value);
  
  
  
}