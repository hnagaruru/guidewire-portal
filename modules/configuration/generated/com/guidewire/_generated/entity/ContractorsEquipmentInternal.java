package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "ContractorsEquipment.eti;ContractorsEquipment.eix;ContractorsEquipment.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface ContractorsEquipmentInternal extends com.guidewire._generated.entity.EffDatedInternal, com.guidewire._generated.entity.CoverableInternal, gw.api.contact.AdditionalInterestContainer, gw.api.copier.EffDatedCopyable, gw.api.domain.CoverableAdapter, gw.api.logicalmatch.EffDatedLogicalMatcher {
  /**
   * Adds the given element to the AdditionalInterests array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToAdditionalInterests(entity.IMSchEquipAddlInterest element);
  
  
  /**
   * Adds the given element to the Coverages array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToCoverages(entity.ContractorsEquipCov element);
  
  
  /**
   * Gets the value of the AdditionalInterests field.
   * Additional interests on this piece of equipment
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.IMSchEquipAddlInterest[] getAdditionalInterests();
  
  
  /**
   * Gets the value of the BasedOnValue field.
   * Link to the row on which this row is based; or null if new to branch
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.ContractorsEquipment getBasedOnValue();
  
  
  public gw.pl.persistence.core.Key getBasedOnValueID();
  
  
  /**
   * Gets the value of the BranchValue field.
   * Link to root of effdated tree
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PolicyPeriod getBranchValue();
  
  
  public gw.pl.persistence.core.Key getBranchValueID();
  
  
  /**
   * Gets the value of the ContractorsEquipPart field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.ContractorsEquipPart getContractorsEquipPart();
  
  
  public gw.pl.persistence.core.Key getContractorsEquipPartID();
  
  
  /**
   * Gets the value of the ContractorsEquipmentID field.
   * ID of Contractors Equipment.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getContractorsEquipmentID();
  
  
  /**
   * Gets the value of the ContractorsEquipmentNumber field.
   * Contractors equipment number
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getContractorsEquipmentNumber();
  
  
  /**
   * Gets the value of the Coverages field.
   * All coverages that apply directly to this contractors equipment.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.ContractorsEquipCov[] getCoverages();
  
  
  /**
   * Gets the value of the Description field.
   * Description of Contractors Equipment.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getDescription();
  
  
  /**
   * Gets the value of the Fixed field.
   * Unique ID for this 'object' across all branches and periods
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.ContractorsEquipment getFixed();
  
  
  public gw.pl.persistence.core.Key getFixedID();
  
  
  /**
   * Gets the value of the Manufacturer field.
   * Manufacturer of the equipment.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getManufacturer();
  
  
  /**
   * Gets the value of the Model field.
   * Model of the equipment.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getModel();
  
  
  /**
   * Gets the value of the ModelYear field.
   * Model year of the equipment
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getModelYear();
  
  
  /**
   * Gets the value of the Subtype field.
   * Identifies a particular subtype within a supertype table; each subtype of a supertype has its own unique subtype value
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.ContractorsEquipment getSubtype();
  
  
  /**
   * Gets the value of the YearBought field.
   * Year the equipment was bought
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getYearBought();
  
  
  /**
   * Removes the given element from the AdditionalInterests array. This is achieved by marking the element for removal.
   */
  public void removeFromAdditionalInterests(entity.IMSchEquipAddlInterest element);
  
  
  /**
   * Removes the given element from the AdditionalInterests array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromAdditionalInterests(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the Coverages array. This is achieved by marking the element for removal.
   */
  public void removeFromCoverages(entity.ContractorsEquipCov element);
  
  
  /**
   * Removes the given element from the Coverages array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromCoverages(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Sets the value of the AdditionalInterests field.
   */
  public void setAdditionalInterests(entity.IMSchEquipAddlInterest[] value);
  
  
  /**
   * Sets the value of the BasedOnValue field.
   */
  public void setBasedOnValue(entity.ContractorsEquipment value);
  
  
  public void setBasedOnValueID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the BranchValue field.
   */
  public void setBranchValue(entity.PolicyPeriod value);
  
  
  public void setBranchValueID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the ContractorsEquipPart field.
   */
  public void setContractorsEquipPart(entity.ContractorsEquipPart value);
  
  
  public void setContractorsEquipPartID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the ContractorsEquipmentID field.
   */
  public void setContractorsEquipmentID(java.lang.String value);
  
  
  /**
   * Sets the value of the ContractorsEquipmentNumber field.
   */
  public void setContractorsEquipmentNumber(java.lang.Integer value);
  
  
  /**
   * Sets the value of the Coverages field.
   */
  public void setCoverages(entity.ContractorsEquipCov[] value);
  
  
  /**
   * Sets the value of the Description field.
   */
  public void setDescription(java.lang.String value);
  
  
  /**
   * Sets the value of the Fixed field.
   */
  public void setFixed(entity.ContractorsEquipment value);
  
  
  public void setFixedID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the Manufacturer field.
   */
  public void setManufacturer(java.lang.String value);
  
  
  /**
   * Sets the value of the Model field.
   */
  public void setModel(java.lang.String value);
  
  
  /**
   * Sets the value of the ModelYear field.
   */
  public void setModelYear(java.lang.Integer value);
  
  
  /**
   * Sets the value of the Subtype field.
   */
  public void setSubtype(typekey.ContractorsEquipment value);
  
  
  /**
   * Sets the value of the YearBought field.
   */
  public void setYearBought(java.lang.Integer value);
  
  
  
}