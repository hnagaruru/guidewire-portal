package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "Building.eti;Building.eix;Building.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface BuildingInternal extends com.guidewire._generated.entity.EffDatedInternal, com.guidewire.pc.domain.policy.period.BuildingPublicMethods, com.guidewire.pl.system.entity.DoesNotValidateOnCommit, gw.api.copier.EffDatedCopyable, gw.api.logicalmatch.EffDatedLogicalMatcher {
  /**
   * Adds the given element to the BuildingImprovements array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToBuildingImprovements(entity.BuildingImprovement element);
  
  
  /**
   * Adds the given element to the BuildingSides array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToBuildingSides(entity.BuildingSide element);
  
  
  /**
   * Gets the value of the AlarmCertificate field.
   * Alarm certificate number
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getAlarmCertificate();
  
  
  /**
   * Gets the value of the AlarmCertification field.
   * Alarm certification
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.AlarmCertification getAlarmCertification();
  
  
  /**
   * Gets the value of the AlarmClass field.
   * Alarm class
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.AlarmClass getAlarmClass();
  
  
  /**
   * Gets the value of the AlarmExpiration field.
   * Alarm expiration date
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getAlarmExpiration();
  
  
  /**
   * Gets the value of the AlarmGrade field.
   * Alarm grade
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.AlarmGrade getAlarmGrade();
  
  
  /**
   * Gets the value of the AreaFinished field.
   * Building finished square footage
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getAreaFinished();
  
  
  /**
   * Gets the value of the AreaLeased field.
   * Percentage of area leased
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.AreaLeased getAreaLeased();
  
  
  /**
   * Gets the value of the AreaUnfinished field.
   * Building unfinished square footage
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getAreaUnfinished();
  
  
  /**
   * Gets the value of the BasedOnValue field.
   * Link to the row on which this row is based; or null if new to branch
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.Building getBasedOnValue();
  
  
  public gw.pl.persistence.core.Key getBasedOnValueID();
  
  
  /**
   * Gets the value of the BasementArea field.
   * Area of the basement
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getBasementArea();
  
  
  /**
   * Gets the value of the BranchValue field.
   * Link to root of effdated tree
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PolicyPeriod getBranchValue();
  
  
  public gw.pl.persistence.core.Key getBranchValueID();
  
  
  /**
   * Gets the value of the BuildingAlarmType field.
   * Building alarm type
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.BuildingAlarmType getBuildingAlarmType();
  
  
  /**
   * Gets the value of the BuildingImprovements field.
   * Improvements for building
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.BuildingImprovement[] getBuildingImprovements();
  
  
  /**
   * Gets the value of the BuildingNum field.
   * The building number
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getBuildingNum();
  
  
  /**
   * Gets the value of the BuildingSides field.
   * Sides for building
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.BuildingSide[] getBuildingSides();
  
  
  /**
   * Gets the value of the BurglarySafeguard field.
   * Burglary safeguard
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.BurglarySafeguard getBurglarySafeguard();
  
  
  /**
   * Gets the value of the ConstructionType field.
   * Type of building construction
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.ConstructionType getConstructionType();
  
  
  /**
   * Gets the value of the Description field.
   * Description of the building
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getDescription();
  
  
  /**
   * Gets the value of the EffectivenessGrade field.
   * Building code effectiveness grade
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.EffectivenessGrade getEffectivenessGrade();
  
  
  /**
   * Gets the value of the Fixed field.
   * Unique ID for this 'object' across all branches and periods
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.Building getFixed();
  
  
  public gw.pl.persistence.core.Key getFixedID();
  
  
  /**
   * Gets the value of the InterestType field.
   * Types of interest
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.InterestType getInterestType();
  
  
  /**
   * Gets the value of the NumBasements field.
   * Number of basements
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getNumBasements();
  
  
  /**
   * Gets the value of the NumStories field.
   * Number of stories
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getNumStories();
  
  
  /**
   * Gets the value of the NumUnits field.
   * Number of units
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getNumUnits();
  
  
  /**
   * Gets the value of the PercentOccupied field.
   * % occupied
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.PercentOccupied getPercentOccupied();
  
  
  /**
   * Gets the value of the PercentVacant field.
   * % vacancy
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.PercentByTens getPercentVacant();
  
  
  /**
   * Gets the value of the PolicyLocation field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PolicyLocation getPolicyLocation();
  
  
  public gw.pl.persistence.core.Key getPolicyLocationID();
  
  
  /**
   * Gets the value of the RentedOthers field.
   * Rented to Others
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.PercentByTens getRentedOthers();
  
  
  /**
   * Gets the value of the RoofType field.
   * Roof type
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.RoofType getRoofType();
  
  
  /**
   * Gets the value of the SprinklerCoverage field.
   * % covered by sprinkler
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.Sprinklered getSprinklerCoverage();
  
  
  /**
   * Gets the value of the Subtype field.
   * Identifies a particular subtype within a supertype table; each subtype of a supertype has its own unique subtype value
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.Building getSubtype();
  
  
  /**
   * Gets the value of the TotalArea field.
   * Total area (excluding the basement)
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getTotalArea();
  
  
  /**
   * Gets the value of the WindRating field.
   * Rating against wind damage
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.WindRating getWindRating();
  
  
  /**
   * Gets the value of the YearBuilt field.
   * Year built
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getYearBuilt();
  
  
  /**
   * Gets the value of the HeatingBoilerElsewhere field.
   * Indicates if a heating boiler other than on the premises is insured
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isHeatingBoilerElsewhere();
  
  
  /**
   * Gets the value of the HeatingBoilerOnPremises field.
   * Indicates if a heating boiler is on the premises
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isHeatingBoilerOnPremises();
  
  
  /**
   * Removes the given element from the BuildingImprovements array. This is achieved by marking the element for removal.
   */
  public void removeFromBuildingImprovements(entity.BuildingImprovement element);
  
  
  /**
   * Removes the given element from the BuildingImprovements array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromBuildingImprovements(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the BuildingSides array. This is achieved by marking the element for removal.
   */
  public void removeFromBuildingSides(entity.BuildingSide element);
  
  
  /**
   * Removes the given element from the BuildingSides array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromBuildingSides(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Sets the value of the AlarmCertificate field.
   */
  public void setAlarmCertificate(java.lang.String value);
  
  
  /**
   * Sets the value of the AlarmCertification field.
   */
  public void setAlarmCertification(typekey.AlarmCertification value);
  
  
  /**
   * Sets the value of the AlarmClass field.
   */
  public void setAlarmClass(typekey.AlarmClass value);
  
  
  /**
   * Sets the value of the AlarmExpiration field.
   */
  public void setAlarmExpiration(java.util.Date value);
  
  
  /**
   * Sets the value of the AlarmGrade field.
   */
  public void setAlarmGrade(typekey.AlarmGrade value);
  
  
  /**
   * Sets the value of the AreaFinished field.
   */
  public void setAreaFinished(java.lang.Integer value);
  
  
  /**
   * Sets the value of the AreaLeased field.
   */
  public void setAreaLeased(typekey.AreaLeased value);
  
  
  /**
   * Sets the value of the AreaUnfinished field.
   */
  public void setAreaUnfinished(java.lang.Integer value);
  
  
  /**
   * Sets the value of the BasedOnValue field.
   */
  public void setBasedOnValue(entity.Building value);
  
  
  public void setBasedOnValueID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the BasementArea field.
   */
  public void setBasementArea(java.lang.Integer value);
  
  
  /**
   * Sets the value of the BranchValue field.
   */
  public void setBranchValue(entity.PolicyPeriod value);
  
  
  public void setBranchValueID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the BuildingAlarmType field.
   */
  public void setBuildingAlarmType(typekey.BuildingAlarmType value);
  
  
  /**
   * Sets the value of the BuildingImprovements field.
   */
  public void setBuildingImprovements(entity.BuildingImprovement[] value);
  
  
  /**
   * Sets the value of the BuildingNum field.
   */
  public void setBuildingNum(java.lang.Integer value);
  
  
  /**
   * Sets the value of the BuildingSides field.
   */
  public void setBuildingSides(entity.BuildingSide[] value);
  
  
  /**
   * Sets the value of the BurglarySafeguard field.
   */
  public void setBurglarySafeguard(typekey.BurglarySafeguard value);
  
  
  /**
   * Sets the value of the ConstructionType field.
   */
  public void setConstructionType(typekey.ConstructionType value);
  
  
  /**
   * Sets the value of the Description field.
   */
  public void setDescription(java.lang.String value);
  
  
  /**
   * Sets the value of the EffectivenessGrade field.
   */
  public void setEffectivenessGrade(typekey.EffectivenessGrade value);
  
  
  /**
   * Sets the value of the Fixed field.
   */
  public void setFixed(entity.Building value);
  
  
  public void setFixedID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the HeatingBoilerElsewhere field.
   */
  public void setHeatingBoilerElsewhere(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the HeatingBoilerOnPremises field.
   */
  public void setHeatingBoilerOnPremises(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the InterestType field.
   */
  public void setInterestType(typekey.InterestType value);
  
  
  /**
   * Sets the value of the NumBasements field.
   */
  public void setNumBasements(java.lang.Integer value);
  
  
  /**
   * Sets the value of the NumStories field.
   */
  public void setNumStories(java.lang.Integer value);
  
  
  /**
   * Sets the value of the NumUnits field.
   */
  public void setNumUnits(java.lang.Integer value);
  
  
  /**
   * Sets the value of the PercentOccupied field.
   */
  public void setPercentOccupied(typekey.PercentOccupied value);
  
  
  /**
   * Sets the value of the PercentVacant field.
   */
  public void setPercentVacant(typekey.PercentByTens value);
  
  
  /**
   * Sets the value of the PolicyLocation field.
   */
  public void setPolicyLocation(entity.PolicyLocation value);
  
  
  public void setPolicyLocationID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the RentedOthers field.
   */
  public void setRentedOthers(typekey.PercentByTens value);
  
  
  /**
   * Sets the value of the RoofType field.
   */
  public void setRoofType(typekey.RoofType value);
  
  
  /**
   * Sets the value of the SprinklerCoverage field.
   */
  public void setSprinklerCoverage(typekey.Sprinklered value);
  
  
  /**
   * Sets the value of the Subtype field.
   */
  public void setSubtype(typekey.Building value);
  
  
  /**
   * Sets the value of the TotalArea field.
   */
  public void setTotalArea(java.lang.Integer value);
  
  
  /**
   * Sets the value of the WindRating field.
   */
  public void setWindRating(typekey.WindRating value);
  
  
  /**
   * Sets the value of the YearBuilt field.
   */
  public void setYearBuilt(java.lang.Integer value);
  
  
  
}