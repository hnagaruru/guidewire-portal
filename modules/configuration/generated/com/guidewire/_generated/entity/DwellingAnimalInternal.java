package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "DwellingAnimal.eti;DwellingAnimal.eix;DwellingAnimal.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface DwellingAnimalInternal extends com.guidewire._generated.entity.EffDatedInternal {
  /**
   * Gets the value of the AdditionalInformation field.
   * Additional information or comments
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getAdditionalInformation();
  
  
  /**
   * Gets the value of the AnimalBreed field.
   * Animal Breed
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.AnimalBreed getAnimalBreed();
  
  
  /**
   * Gets the value of the AnimalType field.
   * Animal Type
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.AnimalType getAnimalType();
  
  
  /**
   * Gets the value of the BasedOnValue field.
   * Link to the row on which this row is based; or null if new to branch
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.DwellingAnimal getBasedOnValue();
  
  
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
  public entity.DwellingAnimal getFixed();
  
  
  public gw.pl.persistence.core.Key getFixedID();
  
  
  /**
   * Gets the value of the HOPDwelling field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.HOPDwelling getHOPDwelling();
  
  
  public gw.pl.persistence.core.Key getHOPDwellingID();
  
  
  /**
   * Gets the value of the Subtype field.
   * Identifies a particular subtype within a supertype table; each subtype of a supertype has its own unique subtype value
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.DwellingAnimal getSubtype();
  
  
  /**
   * Gets the value of the AnimalBiteHistory field.
   * Animal Bite History
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isAnimalBiteHistory();
  
  
  /**
   * Sets the value of the AdditionalInformation field.
   */
  public void setAdditionalInformation(java.lang.String value);
  
  
  /**
   * Sets the value of the AnimalBiteHistory field.
   */
  public void setAnimalBiteHistory(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the AnimalBreed field.
   */
  public void setAnimalBreed(typekey.AnimalBreed value);
  
  
  /**
   * Sets the value of the AnimalType field.
   */
  public void setAnimalType(typekey.AnimalType value);
  
  
  /**
   * Sets the value of the BasedOnValue field.
   */
  public void setBasedOnValue(entity.DwellingAnimal value);
  
  
  public void setBasedOnValueID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the BranchValue field.
   */
  public void setBranchValue(entity.PolicyPeriod value);
  
  
  public void setBranchValueID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the Fixed field.
   */
  public void setFixed(entity.DwellingAnimal value);
  
  
  public void setFixedID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the HOPDwelling field.
   */
  public void setHOPDwelling(entity.HOPDwelling value);
  
  
  public void setHOPDwellingID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the Subtype field.
   */
  public void setSubtype(typekey.DwellingAnimal value);
  
  
  
}