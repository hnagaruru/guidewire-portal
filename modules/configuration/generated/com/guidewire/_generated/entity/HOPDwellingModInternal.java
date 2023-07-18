package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "HOPDwellingMod.eti;HOPDwellingMod.eix;HOPDwellingMod.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface HOPDwellingModInternal extends com.guidewire._generated.entity.EffDatedInternal, com.guidewire._generated.entity.ModifierInternal, gw.api.copier.EffDatedCopyable, gw.api.domain.ModifierAdapter, gw.api.logicalmatch.EffDatedLogicalMatcher {
  /**
   * Adds the given element to the HOPDwellingModifierCosts array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToHOPDwellingModifierCosts(entity.HOPDwellingModifierCost element);
  
  
  /**
   * Adds the given element to the HOPDwellingRateFactors array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToHOPDwellingRateFactors(entity.HOPDwellingRF element);
  
  
  /**
   * Gets the value of the BasedOnValue field.
   * Link to the row on which this row is based; or null if new to branch
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.HOPDwellingMod getBasedOnValue();
  
  
  public gw.pl.persistence.core.Key getBasedOnValueID();
  
  
  /**
   * Gets the value of the BranchValue field.
   * Link to root of effdated tree
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PolicyPeriod getBranchValue();
  
  
  public gw.pl.persistence.core.Key getBranchValueID();
  
  
  /**
   * Gets the value of the Fixed field.
   * Unique ID for this 'object' across all branches and periods
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.HOPDwellingMod getFixed();
  
  
  public gw.pl.persistence.core.Key getFixedID();
  
  
  /**
   * Gets the value of the HOPDwelling field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.HOPDwelling getHOPDwelling();
  
  
  public gw.pl.persistence.core.Key getHOPDwellingID();
  
  
  /**
   * Gets the value of the HOPDwellingModifierCosts field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.HOPDwellingModifierCost[] getHOPDwellingModifierCosts();
  
  
  /**
   * Gets the value of the HOPDwellingRateFactors field.
   * Individual components of the rating factor
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.HOPDwellingRF[] getHOPDwellingRateFactors();
  
  
  /**
   * Gets the value of the Subtype field.
   * Identifies a particular subtype within a supertype table; each subtype of a supertype has its own unique subtype value
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.HOPDwellingMod getSubtype();
  
  
  /**
   * Removes the given element from the HOPDwellingModifierCosts array. This is achieved by marking the element for removal.
   */
  public void removeFromHOPDwellingModifierCosts(entity.HOPDwellingModifierCost element);
  
  
  /**
   * Removes the given element from the HOPDwellingModifierCosts array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromHOPDwellingModifierCosts(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the HOPDwellingRateFactors array. This is achieved by marking the element for removal.
   */
  public void removeFromHOPDwellingRateFactors(entity.HOPDwellingRF element);
  
  
  /**
   * Removes the given element from the HOPDwellingRateFactors array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromHOPDwellingRateFactors(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Sets the value of the BasedOnValue field.
   */
  public void setBasedOnValue(entity.HOPDwellingMod value);
  
  
  public void setBasedOnValueID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the BranchValue field.
   */
  public void setBranchValue(entity.PolicyPeriod value);
  
  
  public void setBranchValueID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the Fixed field.
   */
  public void setFixed(entity.HOPDwellingMod value);
  
  
  public void setFixedID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the HOPDwelling field.
   */
  public void setHOPDwelling(entity.HOPDwelling value);
  
  
  public void setHOPDwellingID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the HOPDwellingModifierCosts field.
   */
  public void setHOPDwellingModifierCosts(entity.HOPDwellingModifierCost[] value);
  
  
  /**
   * Sets the value of the HOPDwellingRateFactors field.
   */
  public void setHOPDwellingRateFactors(entity.HOPDwellingRF[] value);
  
  
  /**
   * Sets the value of the Subtype field.
   */
  public void setSubtype(typekey.HOPDwellingMod value);
  
  
  
}