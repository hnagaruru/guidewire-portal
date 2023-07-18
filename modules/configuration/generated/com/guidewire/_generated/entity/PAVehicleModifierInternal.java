package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "PAVehicleModifier.eti;PAVehicleModifier.eix;PAVehicleModifier.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface PAVehicleModifierInternal extends com.guidewire._generated.entity.EffDatedInternal, com.guidewire._generated.entity.ModifierInternal, gw.api.copier.EffDatedCopyable, gw.api.domain.ModifierAdapter, gw.api.logicalmatch.EffDatedLogicalMatcher {
  /**
   * Adds the given element to the PAVehicleRateFactors array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToPAVehicleRateFactors(entity.PAVehicleRateFactor element);
  
  
  /**
   * Gets the value of the BasedOnValue field.
   * Link to the row on which this row is based; or null if new to branch
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PAVehicleModifier getBasedOnValue();
  
  
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
  public entity.PAVehicleModifier getFixed();
  
  
  public gw.pl.persistence.core.Key getFixedID();
  
  
  /**
   * Gets the value of the PAVehicle field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PersonalVehicle getPAVehicle();
  
  
  public gw.pl.persistence.core.Key getPAVehicleID();
  
  
  /**
   * Gets the value of the PAVehicleRateFactors field.
   * Individual components of the rating factor
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PAVehicleRateFactor[] getPAVehicleRateFactors();
  
  
  /**
   * Gets the value of the Subtype field.
   * Identifies a particular subtype within a supertype table; each subtype of a supertype has its own unique subtype value
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.PAVehicleModifier getSubtype();
  
  
  /**
   * Removes the given element from the PAVehicleRateFactors array. This is achieved by marking the element for removal.
   */
  public void removeFromPAVehicleRateFactors(entity.PAVehicleRateFactor element);
  
  
  /**
   * Removes the given element from the PAVehicleRateFactors array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromPAVehicleRateFactors(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Sets the value of the BasedOnValue field.
   */
  public void setBasedOnValue(entity.PAVehicleModifier value);
  
  
  public void setBasedOnValueID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the BranchValue field.
   */
  public void setBranchValue(entity.PolicyPeriod value);
  
  
  public void setBranchValueID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the Fixed field.
   */
  public void setFixed(entity.PAVehicleModifier value);
  
  
  public void setFixedID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the PAVehicle field.
   */
  public void setPAVehicle(entity.PersonalVehicle value);
  
  
  public void setPAVehicleID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the PAVehicleRateFactors field.
   */
  public void setPAVehicleRateFactors(entity.PAVehicleRateFactor[] value);
  
  
  /**
   * Sets the value of the Subtype field.
   */
  public void setSubtype(typekey.PAVehicleModifier value);
  
  
  
}