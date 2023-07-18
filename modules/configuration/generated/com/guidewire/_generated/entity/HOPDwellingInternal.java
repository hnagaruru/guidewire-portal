package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "HOPDwelling.eti;HOPDwelling.eix;HOPDwelling.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface HOPDwellingInternal extends com.guidewire._generated.entity.EffDatedInternal, com.guidewire._generated.entity.CoverableInternal, com.guidewire._generated.entity.ModifiableInternal, gw.api.contact.AdditionalInterestContainer, gw.api.domain.CoverableAdapter, gw.api.domain.ModifiableAdapter, gw.api.logicalmatch.EffDatedLogicalMatcher {
  /**
   * Adds the given element to the AdditionalInterests array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToAdditionalInterests(entity.HOPDwellAddlInterest element);
  
  
  /**
   * Adds the given element to the Conditions array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToConditions(entity.HOPDwellingCond element);
  
  
  /**
   * Adds the given element to the Coverages array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToCoverages(entity.HOPDwellingCov element);
  
  
  /**
   * Adds the given element to the DwellingAnimals array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToDwellingAnimals(entity.DwellingAnimal element);
  
  
  /**
   * Adds the given element to the DwellingHazards array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToDwellingHazards(entity.DwellingHazard element);
  
  
  /**
   * Adds the given element to the Exclusions array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToExclusions(entity.HOPDwellingExcl element);
  
  
  /**
   * Adds the given element to the HOPDwellingMods array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToHOPDwellingMods(entity.HOPDwellingMod element);
  
  
  /**
   * Adds the given element to the SwimmingPoolArray array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToSwimmingPoolArray(entity.HOPSwimmingPool element);
  
  
  /**
   * Gets the value of the AdditionalInterests field.
   * Third parties with an additional interest in the Dwelling
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.HOPDwellAddlInterest[] getAdditionalInterests();
  
  
  /**
   * Gets the value of the BasedOnValue field.
   * Link to the row on which this row is based; or null if new to branch
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.HOPDwelling getBasedOnValue();
  
  
  public gw.pl.persistence.core.Key getBasedOnValueID();
  
  
  /**
   * Gets the value of the BranchValue field.
   * Link to root of effdated tree
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PolicyPeriod getBranchValue();
  
  
  public gw.pl.persistence.core.Key getBranchValueID();
  
  
  /**
   * Gets the value of the BurglarAlarmType field.
   * Burglar Alarm Type
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.BurglarAlarmType getBurglarAlarmType();
  
  
  /**
   * Gets the value of the Conditions field.
   * Conditions directly attached to the Dwelling
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.HOPDwellingCond[] getConditions();
  
  
  /**
   * Gets the value of the ConstructionType field.
   * Dwelling Construction Type
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.HOPConstructionType getConstructionType();
  
  
  /**
   * Gets the value of the ConstructionTypeDescription field.
   * Description of construction for type Other
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getConstructionTypeDescription();
  
  
  /**
   * Gets the value of the CoverageForm field.
   * The HO coverage form for this dwelling
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.HOPCoverageForm getCoverageForm();
  
  
  /**
   * Gets the value of the Coverages field.
   * Coverages directly attached to the Dwelling
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.HOPDwellingCov[] getCoverages();
  
  
  /**
   * Gets the value of the DistanceToFireHydrant field.
   * Distance to Fire Hydrant
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getDistanceToFireHydrant();
  
  
  /**
   * Gets the value of the DistanceToFireStation field.
   * Distance to Fire Station
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getDistanceToFireStation();
  
  
  /**
   * Gets the value of the DwellingAnimals field.
   * Animals in the dwelling premises
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.DwellingAnimal[] getDwellingAnimals();
  
  
  /**
   * Gets the value of the DwellingHazards field.
   * Hazards in the dwelling premises
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.DwellingHazard[] getDwellingHazards();
  
  
  /**
   * Gets the value of the DwellingLocation field.
   * Dwelling Location Type
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.DwellingLocationType getDwellingLocation();
  
  
  /**
   * Gets the value of the DwellingUsage field.
   * Dwelling Usage
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.DwellingUsage getDwellingUsage();
  
  
  /**
   * Gets the value of the ElectricalSystemUpgradeDate field.
   * Date of Electrical System Upgrade
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getElectricalSystemUpgradeDate();
  
  
  /**
   * Gets the value of the ElectricalType field.
   * Electrical Type
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.BreakerType getElectricalType();
  
  
  /**
   * Gets the value of the Exclusions field.
   * Exclusions directly attached to the Dwelling
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.HOPDwellingExcl[] getExclusions();
  
  
  /**
   * Gets the value of the FireAlarmType field.
   * Fire alarm type
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.FireAlarmType getFireAlarmType();
  
  
  /**
   * Gets the value of the FireplaceOrWoodStovesNumber field.
   * Number of woodstoves or fire places
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getFireplaceOrWoodStovesNumber();
  
  
  /**
   * Gets the value of the Fixed field.
   * Unique ID for this 'object' across all branches and periods
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.HOPDwelling getFixed();
  
  
  public gw.pl.persistence.core.Key getFixedID();
  
  
  /**
   * Gets the value of the Foundation field.
   * Foundation Type
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.FoundationType getFoundation();
  
  
  /**
   * Gets the value of the GarageType field.
   * Garage type in dwelling
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.GarageType getGarageType();
  
  
  /**
   * Gets the value of the HOPCoveragePart field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.HOPCoveragePart getHOPCoveragePart();
  
  
  public gw.pl.persistence.core.Key getHOPCoveragePartID();
  
  
  /**
   * Gets the value of the HOPDwellingMods field.
   * Modifiers directly attached to the Dwelling
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.HOPDwellingMod[] getHOPDwellingMods();
  
  
  /**
   * Gets the value of the HeatingUpgradeDate field.
   * Date of Heating Upgrade
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getHeatingUpgradeDate();
  
  
  /**
   * Gets the value of the InsuredUnits field.
   * Number of units to be insured
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getInsuredUnits();
  
  
  /**
   * Gets the value of the KnownWaterLeakageDescription field.
   * Description of water leakage
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getKnownWaterLeakageDescription();
  
  
  /**
   * Gets the value of the Location field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PolicyLocation getLocation();
  
  
  public gw.pl.persistence.core.Key getLocationID();
  
  
  /**
   * Gets the value of the NumberOfFireExtinguishers field.
   * How many fire extinguishers are on premises
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getNumberOfFireExtinguishers();
  
  
  /**
   * Gets the value of the Occupancy field.
   * How the dwelling is being occupied
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.DwellingOccupancyType getOccupancy();
  
  
  /**
   * Gets the value of the PlumbingType field.
   * Plumbing Type
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.PlumbingType getPlumbingType();
  
  
  /**
   * Gets the value of the PlumbingTypeDescription field.
   * Description of plumbing for type Other
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getPlumbingTypeDescription();
  
  
  /**
   * Gets the value of the PlumbingUpgradeDate field.
   * Date of Plumbing Upgrade
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getPlumbingUpgradeDate();
  
  
  /**
   * Gets the value of the PrimaryHeatingDescription field.
   * Description of primary heating for type Other
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getPrimaryHeatingDescription();
  
  
  /**
   * Gets the value of the PrimaryHeatingFuelLineLocation field.
   * Location of fuel line for Oil based heating
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.FuelLineLocationType getPrimaryHeatingFuelLineLocation();
  
  
  /**
   * Gets the value of the PrimaryHeatingFuelTankLocation field.
   * Location of fuel tank for Oil based heating
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.FuelTankLocationType getPrimaryHeatingFuelTankLocation();
  
  
  /**
   * Gets the value of the PrimaryHeatingType field.
   * Dwelling Heating Type
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.HeatingType getPrimaryHeatingType();
  
  
  /**
   * Gets the value of the ReplacementCost field.
   * Replacement Cost
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public gw.pl.currency.MonetaryAmount getReplacementCost();
  
  
  /**
   * Gets the value of the ReplacementCost_amt field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getReplacementCost_amt();
  
  
  /**
   * Gets the value of the ReplacementCost_cur field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.Currency getReplacementCost_cur();
  
  
  /**
   * Gets the value of the ResidenceType field.
   * Residence Type
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.ResidenceType getResidenceType();
  
  
  /**
   * Gets the value of the RoofType field.
   * Roof Material Classification
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.HOPRoofType getRoofType();
  
  
  /**
   * Gets the value of the RoofTypeDescription field.
   * Description of Roof Type for type Other
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getRoofTypeDescription();
  
  
  /**
   * Gets the value of the RoofingUpgradeDate field.
   * Date of Roofing Upgrade
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getRoofingUpgradeDate();
  
  
  /**
   * Gets the value of the RoomerBoardersNumber field.
   * Number of roomers or boarders
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getRoomerBoardersNumber();
  
  
  /**
   * Gets the value of the SecondaryHeatingType field.
   *  Secondary Heating Type
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.HeatingType getSecondaryHeatingType();
  
  
  /**
   * Gets the value of the SmokeAlarm field.
   * Smoke Alarms on Premises
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.SmokeAlarms getSmokeAlarm();
  
  
  /**
   * Gets the value of the SprinklerSystemType field.
   * Sprinkler System Type
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.SprinklerSystemType getSprinklerSystemType();
  
  
  /**
   * Gets the value of the StoriesNumber field.
   *  Number of stories in the dwelling
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getStoriesNumber();
  
  
  /**
   * Gets the value of the SwimmingPool field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.HOPSwimmingPool getSwimmingPool();
  
  
  /**
   * Gets the value of the SwimmingPoolArray field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.HOPSwimmingPool[] getSwimmingPoolArray();
  
  
  public gw.pl.persistence.core.Key getSwimmingPoolID();
  
  
  /**
   * Gets the value of the UnitsNumber field.
   *  Number of units between firewall
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getUnitsNumber();
  
  
  /**
   * Gets the value of the WiringType field.
   * Electrical Wiring Type
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.WiringType getWiringType();
  
  
  /**
   * Gets the value of the YearBuilt field.
   * Year Built
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getYearBuilt();
  
  
  /**
   * Gets the value of the Deadbolts field.
   * Do all the doors have Deadbolts
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isDeadbolts();
  
  
  /**
   * Gets the value of the FloodingHazard field.
   * Flooding or landslide hazard?
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isFloodingHazard();
  
  
  /**
   * Gets the value of the KnownWaterLeakage field.
   * Any water leakage
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isKnownWaterLeakage();
  
  
  /**
   * Gets the value of the NearCommercial field.
   * Property within 300 ft of commercial or non-residential property?
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isNearCommercial();
  
  
  /**
   * Gets the value of the TrampolineExists field.
   * Trampoline exists on property?
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isTrampolineExists();
  
  
  /**
   * Gets the value of the TrampolineSafetyNet field.
   * Is there a safety net?
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isTrampolineSafetyNet();
  
  
  /**
   * Gets the value of the VisibleToNeighbors field.
   * Is the dwelling visible to neighbors
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isVisibleToNeighbors();
  
  
  /**
   * Removes the given element from the AdditionalInterests array. This is achieved by marking the element for removal.
   */
  public void removeFromAdditionalInterests(entity.HOPDwellAddlInterest element);
  
  
  /**
   * Removes the given element from the AdditionalInterests array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromAdditionalInterests(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the Conditions array. This is achieved by marking the element for removal.
   */
  public void removeFromConditions(entity.HOPDwellingCond element);
  
  
  /**
   * Removes the given element from the Conditions array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromConditions(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the Coverages array. This is achieved by marking the element for removal.
   */
  public void removeFromCoverages(entity.HOPDwellingCov element);
  
  
  /**
   * Removes the given element from the Coverages array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromCoverages(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the DwellingAnimals array. This is achieved by marking the element for removal.
   */
  public void removeFromDwellingAnimals(entity.DwellingAnimal element);
  
  
  /**
   * Removes the given element from the DwellingAnimals array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromDwellingAnimals(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the DwellingHazards array. This is achieved by marking the element for removal.
   */
  public void removeFromDwellingHazards(entity.DwellingHazard element);
  
  
  /**
   * Removes the given element from the DwellingHazards array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromDwellingHazards(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the Exclusions array. This is achieved by marking the element for removal.
   */
  public void removeFromExclusions(entity.HOPDwellingExcl element);
  
  
  /**
   * Removes the given element from the Exclusions array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromExclusions(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the HOPDwellingMods array. This is achieved by marking the element for removal.
   */
  public void removeFromHOPDwellingMods(entity.HOPDwellingMod element);
  
  
  /**
   * Removes the given element from the HOPDwellingMods array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromHOPDwellingMods(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the SwimmingPoolArray array. This is achieved by marking the element for removal.
   */
  public void removeFromSwimmingPoolArray(entity.HOPSwimmingPool element);
  
  
  /**
   * Removes the given element from the SwimmingPoolArray array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromSwimmingPoolArray(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Sets the value of the AdditionalInterests field.
   */
  public void setAdditionalInterests(entity.HOPDwellAddlInterest[] value);
  
  
  /**
   * Sets the value of the BasedOnValue field.
   */
  public void setBasedOnValue(entity.HOPDwelling value);
  
  
  public void setBasedOnValueID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the BranchValue field.
   */
  public void setBranchValue(entity.PolicyPeriod value);
  
  
  public void setBranchValueID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the BurglarAlarmType field.
   */
  public void setBurglarAlarmType(typekey.BurglarAlarmType value);
  
  
  /**
   * Sets the value of the Conditions field.
   */
  public void setConditions(entity.HOPDwellingCond[] value);
  
  
  /**
   * Sets the value of the ConstructionType field.
   */
  public void setConstructionType(typekey.HOPConstructionType value);
  
  
  /**
   * Sets the value of the ConstructionTypeDescription field.
   */
  public void setConstructionTypeDescription(java.lang.String value);
  
  
  /**
   * Sets the value of the CoverageForm field.
   */
  public void setCoverageForm(typekey.HOPCoverageForm value);
  
  
  /**
   * Sets the value of the Coverages field.
   */
  public void setCoverages(entity.HOPDwellingCov[] value);
  
  
  /**
   * Sets the value of the Deadbolts field.
   */
  public void setDeadbolts(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the DistanceToFireHydrant field.
   */
  public void setDistanceToFireHydrant(java.lang.Integer value);
  
  
  /**
   * Sets the value of the DistanceToFireStation field.
   */
  public void setDistanceToFireStation(java.lang.Integer value);
  
  
  /**
   * Sets the value of the DwellingAnimals field.
   */
  public void setDwellingAnimals(entity.DwellingAnimal[] value);
  
  
  /**
   * Sets the value of the DwellingHazards field.
   */
  public void setDwellingHazards(entity.DwellingHazard[] value);
  
  
  /**
   * Sets the value of the DwellingLocation field.
   */
  public void setDwellingLocation(typekey.DwellingLocationType value);
  
  
  /**
   * Sets the value of the DwellingUsage field.
   */
  public void setDwellingUsage(typekey.DwellingUsage value);
  
  
  /**
   * Sets the value of the ElectricalSystemUpgradeDate field.
   */
  public void setElectricalSystemUpgradeDate(java.lang.Integer value);
  
  
  /**
   * Sets the value of the ElectricalType field.
   */
  public void setElectricalType(typekey.BreakerType value);
  
  
  /**
   * Sets the value of the Exclusions field.
   */
  public void setExclusions(entity.HOPDwellingExcl[] value);
  
  
  /**
   * Sets the value of the FireAlarmType field.
   */
  public void setFireAlarmType(typekey.FireAlarmType value);
  
  
  /**
   * Sets the value of the FireplaceOrWoodStovesNumber field.
   */
  public void setFireplaceOrWoodStovesNumber(java.lang.Integer value);
  
  
  /**
   * Sets the value of the Fixed field.
   */
  public void setFixed(entity.HOPDwelling value);
  
  
  public void setFixedID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the FloodingHazard field.
   */
  public void setFloodingHazard(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the Foundation field.
   */
  public void setFoundation(typekey.FoundationType value);
  
  
  /**
   * Sets the value of the GarageType field.
   */
  public void setGarageType(typekey.GarageType value);
  
  
  /**
   * Sets the value of the HOPCoveragePart field.
   */
  public void setHOPCoveragePart(entity.HOPCoveragePart value);
  
  
  public void setHOPCoveragePartID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the HOPDwellingMods field.
   */
  public void setHOPDwellingMods(entity.HOPDwellingMod[] value);
  
  
  /**
   * Sets the value of the HeatingUpgradeDate field.
   */
  public void setHeatingUpgradeDate(java.lang.Integer value);
  
  
  /**
   * Sets the value of the InsuredUnits field.
   */
  public void setInsuredUnits(java.lang.Integer value);
  
  
  /**
   * Sets the value of the KnownWaterLeakage field.
   */
  public void setKnownWaterLeakage(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the KnownWaterLeakageDescription field.
   */
  public void setKnownWaterLeakageDescription(java.lang.String value);
  
  
  /**
   * Sets the value of the Location field.
   */
  public void setLocation(entity.PolicyLocation value);
  
  
  public void setLocationID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the NearCommercial field.
   */
  public void setNearCommercial(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the NumberOfFireExtinguishers field.
   */
  public void setNumberOfFireExtinguishers(java.lang.Integer value);
  
  
  /**
   * Sets the value of the Occupancy field.
   */
  public void setOccupancy(typekey.DwellingOccupancyType value);
  
  
  /**
   * Sets the value of the PlumbingType field.
   */
  public void setPlumbingType(typekey.PlumbingType value);
  
  
  /**
   * Sets the value of the PlumbingTypeDescription field.
   */
  public void setPlumbingTypeDescription(java.lang.String value);
  
  
  /**
   * Sets the value of the PlumbingUpgradeDate field.
   */
  public void setPlumbingUpgradeDate(java.lang.Integer value);
  
  
  /**
   * Sets the value of the PrimaryHeatingDescription field.
   */
  public void setPrimaryHeatingDescription(java.lang.String value);
  
  
  /**
   * Sets the value of the PrimaryHeatingFuelLineLocation field.
   */
  public void setPrimaryHeatingFuelLineLocation(typekey.FuelLineLocationType value);
  
  
  /**
   * Sets the value of the PrimaryHeatingFuelTankLocation field.
   */
  public void setPrimaryHeatingFuelTankLocation(typekey.FuelTankLocationType value);
  
  
  /**
   * Sets the value of the PrimaryHeatingType field.
   */
  public void setPrimaryHeatingType(typekey.HeatingType value);
  
  
  /**
   * Sets the value of the ReplacementCost field.
   */
  public void setReplacementCost(gw.pl.currency.MonetaryAmount value);
  
  
  /**
   * Sets the value of the ReplacementCost_amt field.
   */
  public void setReplacementCost_amt(java.math.BigDecimal value);
  
  
  /**
   * Sets the value of the ReplacementCost_cur field.
   */
  public void setReplacementCost_cur(typekey.Currency value);
  
  
  /**
   * Sets the value of the ResidenceType field.
   */
  public void setResidenceType(typekey.ResidenceType value);
  
  
  /**
   * Sets the value of the RoofType field.
   */
  public void setRoofType(typekey.HOPRoofType value);
  
  
  /**
   * Sets the value of the RoofTypeDescription field.
   */
  public void setRoofTypeDescription(java.lang.String value);
  
  
  /**
   * Sets the value of the RoofingUpgradeDate field.
   */
  public void setRoofingUpgradeDate(java.lang.Integer value);
  
  
  /**
   * Sets the value of the RoomerBoardersNumber field.
   */
  public void setRoomerBoardersNumber(java.lang.Integer value);
  
  
  /**
   * Sets the value of the SecondaryHeatingType field.
   */
  public void setSecondaryHeatingType(typekey.HeatingType value);
  
  
  /**
   * Sets the value of the SmokeAlarm field.
   */
  public void setSmokeAlarm(typekey.SmokeAlarms value);
  
  
  /**
   * Sets the value of the SprinklerSystemType field.
   */
  public void setSprinklerSystemType(typekey.SprinklerSystemType value);
  
  
  /**
   * Sets the value of the StoriesNumber field.
   */
  public void setStoriesNumber(java.lang.Integer value);
  
  
  /**
   * Sets the value of the SwimmingPool field.
   */
  public void setSwimmingPool(entity.HOPSwimmingPool value);
  
  
  /**
   * Sets the value of the SwimmingPoolArray field.
   */
  public void setSwimmingPoolArray(entity.HOPSwimmingPool[] value);
  
  
  public void setSwimmingPoolID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the TrampolineExists field.
   */
  public void setTrampolineExists(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the TrampolineSafetyNet field.
   */
  public void setTrampolineSafetyNet(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the UnitsNumber field.
   */
  public void setUnitsNumber(java.lang.Integer value);
  
  
  /**
   * Sets the value of the VisibleToNeighbors field.
   */
  public void setVisibleToNeighbors(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the WiringType field.
   */
  public void setWiringType(typekey.WiringType value);
  
  
  /**
   * Sets the value of the YearBuilt field.
   */
  public void setYearBuilt(java.lang.Integer value);
  
  
  
}