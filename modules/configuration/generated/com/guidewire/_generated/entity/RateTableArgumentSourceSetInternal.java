package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "RateTableArgumentSourceSet.eti;RateTableArgumentSourceSet.eix;RateTableArgumentSourceSet.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface RateTableArgumentSourceSetInternal extends com.guidewire._generated.entity.RetireableInternal {
  /**
   * Adds the given element to the Name_L10N_ARRAY array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToName_L10N_ARRAY(entity.RateTableArgumentSourceSet_Name_L10N element);
  
  
  /**
   * Adds the given element to the RateTableArgumentSources array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToRateTableArgumentSources(entity.RateTableArgumentSource element);
  
  
  /**
   * Gets the value of the CalcRoutineParameterSet field.
   * CalcRoutineParameterSet
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.CalcRoutineParameterSet getCalcRoutineParameterSet();
  
  
  public gw.pl.persistence.core.Key getCalcRoutineParameterSetID();
  
  
  /**
   * Gets the value of the Code field.
   * The parameter set code
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getCode();
  
  
  /**
   * Gets the value of the Name field.
   * The logical name of the parameter set.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getName();
  
  
  /**
   * Gets the value of the Name_L10N_ARRAY field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.RateTableArgumentSourceSet_Name_L10N[] getName_L10N_ARRAY();
  
  
  /**
   * Array association for partition Name_L10N_ARRAYByLanguage on array Name_L10N_ARRAY
   */
  public entity.RateTableArgumentSourceSet_Name_L10N getName_L10N_ARRAYByLanguage(com.guidewire.commons.entity.type2.IAssociativeArrayPropertyInfo property);
  
  
  /**
   * Gets the value of the RateTableArgumentSources field.
   * The RateTableArgumentSource's using this Param Set
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.RateTableArgumentSource[] getRateTableArgumentSources();
  
  
  /**
   * Gets the value of the RateTableDefinition field.
   * RateTableDefinition
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.RateTableDefinition getRateTableDefinition();
  
  
  public gw.pl.persistence.core.Key getRateTableDefinitionID();
  
  
  /**
   * Removes the given element from the Name_L10N_ARRAY array. This is achieved by marking the element for removal.
   */
  public void removeFromName_L10N_ARRAY(entity.RateTableArgumentSourceSet_Name_L10N element);
  
  
  /**
   * Removes the given element from the Name_L10N_ARRAY array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromName_L10N_ARRAY(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the RateTableArgumentSources array. This is achieved by marking the element for removal.
   */
  public void removeFromRateTableArgumentSources(entity.RateTableArgumentSource element);
  
  
  /**
   * Removes the given element from the RateTableArgumentSources array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromRateTableArgumentSources(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Sets the value of the CalcRoutineParameterSet field.
   */
  public void setCalcRoutineParameterSet(entity.CalcRoutineParameterSet value);
  
  
  public void setCalcRoutineParameterSetID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the Code field.
   */
  public void setCode(java.lang.String value);
  
  
  /**
   * Sets the value of the Name field.
   */
  public void setName(java.lang.String value);
  
  
  /**
   * Sets the value of the Name_L10N_ARRAY field.
   */
  public void setName_L10N_ARRAY(entity.RateTableArgumentSourceSet_Name_L10N[] value);
  
  
  /**
   * Sets the value of the RateTableArgumentSources field.
   */
  public void setRateTableArgumentSources(entity.RateTableArgumentSource[] value);
  
  
  /**
   * Sets the value of the RateTableDefinition field.
   */
  public void setRateTableDefinition(entity.RateTableDefinition value);
  
  
  public void setRateTableDefinitionID(gw.pl.persistence.core.Key value);
  
  
  
}