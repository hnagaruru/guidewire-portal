package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "ContractorsEquipPart.eti;ContractorsEquipPart.eix;ContractorsEquipPart.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface ContractorsEquipPartInternal extends com.guidewire._generated.entity.IMCoveragePartInternal, com.guidewire._generated.entity.CoverableInternal, gw.api.domain.CoverableAdapter {
  /**
   * Adds the given element to the ContrEquipPartConditions array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToContrEquipPartConditions(entity.ContrEquipPartCond element);
  
  
  /**
   * Adds the given element to the ContrEquipPartCosts array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToContrEquipPartCosts(entity.ContrEquipPartCost element);
  
  
  /**
   * Adds the given element to the ContrEquipPartCovs array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToContrEquipPartCovs(entity.ContrEquipPartCov element);
  
  
  /**
   * Adds the given element to the ContrEquipPartExclusions array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToContrEquipPartExclusions(entity.ContrEquipPartExcl element);
  
  
  /**
   * Adds the given element to the ContractorsEquipments array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToContractorsEquipments(entity.ContractorsEquipment element);
  
  
  /**
   * Gets the value of the Coinsurance field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.Coinsurance getCoinsurance();
  
  
  /**
   * Gets the value of the ContrEqPartAutoNumberSeq field.
   * Sequence to autonumber contractors eqiupment part
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.AutoNumberSequence getContrEqPartAutoNumberSeq();
  
  
  public gw.pl.persistence.core.Key getContrEqPartAutoNumberSeqID();
  
  
  /**
   * Gets the value of the ContrEquipPartConditions field.
   * Line-level conditions for Contractors Equipment Coverage Part of Inland Marine.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.ContrEquipPartCond[] getContrEquipPartConditions();
  
  
  /**
   * Gets the value of the ContrEquipPartCosts field.
   * Costs for the part
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.ContrEquipPartCost[] getContrEquipPartCosts();
  
  
  /**
   * Gets the value of the ContrEquipPartCovs field.
   * Coverages for Contractors Equipment Coverage Part of Inland Marine.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.ContrEquipPartCov[] getContrEquipPartCovs();
  
  
  /**
   * Gets the value of the ContrEquipPartExclusions field.
   * Line-level exclusions for Contractors Equipment Coverage Part of Inland Marine.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.ContrEquipPartExcl[] getContrEquipPartExclusions();
  
  
  /**
   * Gets the value of the ContractorType field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.ContractorType getContractorType();
  
  
  /**
   * Gets the value of the ContractorsEquipments field.
   * List of Covered Contractors equipment on this Coverage Part.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.ContractorsEquipment[] getContractorsEquipments();
  
  
  /**
   * Gets the value of the PerOccurrenceLimit field.
   * The per-occurrence limit
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getPerOccurrenceLimit();
  
  
  /**
   * Gets the value of the Reporting field.
   * Reporting
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isReporting();
  
  
  /**
   * Removes the given element from the ContrEquipPartConditions array. This is achieved by marking the element for removal.
   */
  public void removeFromContrEquipPartConditions(entity.ContrEquipPartCond element);
  
  
  /**
   * Removes the given element from the ContrEquipPartConditions array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromContrEquipPartConditions(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the ContrEquipPartCosts array. This is achieved by marking the element for removal.
   */
  public void removeFromContrEquipPartCosts(entity.ContrEquipPartCost element);
  
  
  /**
   * Removes the given element from the ContrEquipPartCosts array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromContrEquipPartCosts(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the ContrEquipPartCovs array. This is achieved by marking the element for removal.
   */
  public void removeFromContrEquipPartCovs(entity.ContrEquipPartCov element);
  
  
  /**
   * Removes the given element from the ContrEquipPartCovs array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromContrEquipPartCovs(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the ContrEquipPartExclusions array. This is achieved by marking the element for removal.
   */
  public void removeFromContrEquipPartExclusions(entity.ContrEquipPartExcl element);
  
  
  /**
   * Removes the given element from the ContrEquipPartExclusions array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromContrEquipPartExclusions(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the ContractorsEquipments array. This is achieved by marking the element for removal.
   */
  public void removeFromContractorsEquipments(entity.ContractorsEquipment element);
  
  
  /**
   * Removes the given element from the ContractorsEquipments array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromContractorsEquipments(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Sets the value of the Coinsurance field.
   */
  public void setCoinsurance(typekey.Coinsurance value);
  
  
  /**
   * Sets the value of the ContrEqPartAutoNumberSeq field.
   */
  public void setContrEqPartAutoNumberSeq(entity.AutoNumberSequence value);
  
  
  public void setContrEqPartAutoNumberSeqID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the ContrEquipPartConditions field.
   */
  public void setContrEquipPartConditions(entity.ContrEquipPartCond[] value);
  
  
  /**
   * Sets the value of the ContrEquipPartCosts field.
   */
  public void setContrEquipPartCosts(entity.ContrEquipPartCost[] value);
  
  
  /**
   * Sets the value of the ContrEquipPartCovs field.
   */
  public void setContrEquipPartCovs(entity.ContrEquipPartCov[] value);
  
  
  /**
   * Sets the value of the ContrEquipPartExclusions field.
   */
  public void setContrEquipPartExclusions(entity.ContrEquipPartExcl[] value);
  
  
  /**
   * Sets the value of the ContractorType field.
   */
  public void setContractorType(typekey.ContractorType value);
  
  
  /**
   * Sets the value of the ContractorsEquipments field.
   */
  public void setContractorsEquipments(entity.ContractorsEquipment[] value);
  
  
  /**
   * Sets the value of the PerOccurrenceLimit field.
   */
  public void setPerOccurrenceLimit(java.lang.Integer value);
  
  
  /**
   * Sets the value of the Reporting field.
   */
  public void setReporting(java.lang.Boolean value);
  
  
  
}