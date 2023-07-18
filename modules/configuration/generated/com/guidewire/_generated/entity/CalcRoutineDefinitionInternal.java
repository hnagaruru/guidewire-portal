package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "CalcRoutineDefinition.eti;CalcRoutineDefinition.eix;CalcRoutineDefinition.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface CalcRoutineDefinitionInternal extends com.guidewire._generated.entity.RetireableInternal {
  /**
   * Adds the given element to the Description_L10N_ARRAY array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToDescription_L10N_ARRAY(entity.CalcRoutineDefinition_Description_L10N element);
  
  
  /**
   * Adds the given element to the Name_L10N_ARRAY array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToName_L10N_ARRAY(entity.CalcRoutineDefinition_Name_L10N element);
  
  
  /**
   * Adds the given element to the RateBookCalcRoutines array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToRateBookCalcRoutines(entity.RateBookCalcRoutine element);
  
  
  /**
   * Adds the given element to the Steps array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToSteps(entity.CalcStepDefinition element);
  
  
  /**
   * Gets the value of the Code field.
   * The unique code for this calculation routine
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getCode();
  
  
  /**
   * Gets the value of the Description field.
   * Describes the purpose and usage of this calculation routine
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getDescription();
  
  
  /**
   * Gets the value of the Description_L10N_ARRAY field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.CalcRoutineDefinition_Description_L10N[] getDescription_L10N_ARRAY();
  
  
  /**
   * Array association for partition Description_L10N_ARRAYByLanguage on array Description_L10N_ARRAY
   */
  public entity.CalcRoutineDefinition_Description_L10N getDescription_L10N_ARRAYByLanguage(com.guidewire.commons.entity.type2.IAssociativeArrayPropertyInfo property);
  
  
  /**
   * Gets the value of the Jurisdiction field.
   * The Jurisdiction, if any, of this CalcRoutineDefinition.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.Jurisdiction getJurisdiction();
  
  
  /**
   * Gets the value of the Name field.
   * A short descriptive name of this calculation routine
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getName();
  
  
  /**
   * Gets the value of the Name_L10N_ARRAY field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.CalcRoutineDefinition_Name_L10N[] getName_L10N_ARRAY();
  
  
  /**
   * Array association for partition Name_L10N_ARRAYByLanguage on array Name_L10N_ARRAY
   */
  public entity.CalcRoutineDefinition_Name_L10N getName_L10N_ARRAYByLanguage(com.guidewire.commons.entity.type2.IAssociativeArrayPropertyInfo property);
  
  
  /**
   * Gets the value of the ParameterSet field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.CalcRoutineParameterSet getParameterSet();
  
  
  public gw.pl.persistence.core.Key getParameterSetID();
  
  
  /**
   * Gets the value of the PolicyLinePatternCode field.
   * The pattern defining what kind of PolicyLine this CalcRoutine was written for
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getPolicyLinePatternCode();
  
  
  /**
   * Gets the value of the RateBookCalcRoutines field.
   * Which rate books reference this routine
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.RateBookCalcRoutine[] getRateBookCalcRoutines();
  
  
  /**
   * Gets the value of the Steps field.
   * List of calculation steps
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.CalcStepDefinition[] getSteps();
  
  
  /**
   * Gets the value of the Version field.
   * Version Number of this calculation routine
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getVersion();
  
  
  /**
   * Removes the given element from the Description_L10N_ARRAY array. This is achieved by marking the element for removal.
   */
  public void removeFromDescription_L10N_ARRAY(entity.CalcRoutineDefinition_Description_L10N element);
  
  
  /**
   * Removes the given element from the Description_L10N_ARRAY array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromDescription_L10N_ARRAY(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the Name_L10N_ARRAY array. This is achieved by marking the element for removal.
   */
  public void removeFromName_L10N_ARRAY(entity.CalcRoutineDefinition_Name_L10N element);
  
  
  /**
   * Removes the given element from the Name_L10N_ARRAY array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromName_L10N_ARRAY(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the RateBookCalcRoutines array. This is achieved by marking the element for removal.
   */
  public void removeFromRateBookCalcRoutines(entity.RateBookCalcRoutine element);
  
  
  /**
   * Removes the given element from the RateBookCalcRoutines array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromRateBookCalcRoutines(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the Steps array. This is achieved by marking the element for removal.
   */
  public void removeFromSteps(entity.CalcStepDefinition element);
  
  
  /**
   * Removes the given element from the Steps array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromSteps(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Sets the value of the Code field.
   */
  public void setCode(java.lang.String value);
  
  
  /**
   * Sets the value of the Description field.
   */
  public void setDescription(java.lang.String value);
  
  
  /**
   * Sets the value of the Description_L10N_ARRAY field.
   */
  public void setDescription_L10N_ARRAY(entity.CalcRoutineDefinition_Description_L10N[] value);
  
  
  /**
   * Sets the value of the Jurisdiction field.
   */
  public void setJurisdiction(typekey.Jurisdiction value);
  
  
  /**
   * Sets the value of the Name field.
   */
  public void setName(java.lang.String value);
  
  
  /**
   * Sets the value of the Name_L10N_ARRAY field.
   */
  public void setName_L10N_ARRAY(entity.CalcRoutineDefinition_Name_L10N[] value);
  
  
  /**
   * Sets the value of the ParameterSet field.
   */
  public void setParameterSet(entity.CalcRoutineParameterSet value);
  
  
  public void setParameterSetID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the PolicyLinePatternCode field.
   */
  public void setPolicyLinePatternCode(java.lang.String value);
  
  
  /**
   * Sets the value of the RateBookCalcRoutines field.
   */
  public void setRateBookCalcRoutines(entity.RateBookCalcRoutine[] value);
  
  
  /**
   * Sets the value of the Steps field.
   */
  public void setSteps(entity.CalcStepDefinition[] value);
  
  
  /**
   * Sets the value of the Version field.
   */
  public void setVersion(java.lang.Integer value);
  
  
  
}