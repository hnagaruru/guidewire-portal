package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "CalcRoutineParameterSet.eti;CalcRoutineParameterSet.eix;CalcRoutineParameterSet.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface CalcRoutineParameterSetInternal extends com.guidewire._generated.entity.RetireableInternal {
  /**
   * Adds the given element to the Name_L10N_ARRAY array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToName_L10N_ARRAY(entity.CalcRoutineParameterSet_Name_L10N element);
  
  
  /**
   * Adds the given element to the Parameters array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToParameters(entity.CalcRoutineParameter element);
  
  
  /**
   * Gets the value of the Code field.
   * The unique code for this calculation routine parameter set
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getCode();
  
  
  /**
   * Gets the value of the Name field.
   * The name for this calculation routine parameter set
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getName();
  
  
  /**
   * Gets the value of the Name_L10N_ARRAY field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.CalcRoutineParameterSet_Name_L10N[] getName_L10N_ARRAY();
  
  
  /**
   * Array association for partition Name_L10N_ARRAYByLanguage on array Name_L10N_ARRAY
   */
  public entity.CalcRoutineParameterSet_Name_L10N getName_L10N_ARRAYByLanguage(com.guidewire.commons.entity.type2.IAssociativeArrayPropertyInfo property);
  
  
  /**
   * Gets the value of the Parameters field.
   * List of calculation routine parameters
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.CalcRoutineParameter[] getParameters();
  
  
  /**
   * Gets the value of the PolicyLinePatternCode field.
   * The pattern defining what kind of PolicyLine this CalcRoutine was written for
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getPolicyLinePatternCode();
  
  
  /**
   * Gets the value of the IncludesCost field.
   * Flag marking whether this parameter set contains a Cost parameter
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isIncludesCost();
  
  
  /**
   * Removes the given element from the Name_L10N_ARRAY array. This is achieved by marking the element for removal.
   */
  public void removeFromName_L10N_ARRAY(entity.CalcRoutineParameterSet_Name_L10N element);
  
  
  /**
   * Removes the given element from the Name_L10N_ARRAY array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromName_L10N_ARRAY(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the Parameters array. This is achieved by marking the element for removal.
   */
  public void removeFromParameters(entity.CalcRoutineParameter element);
  
  
  /**
   * Removes the given element from the Parameters array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromParameters(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Sets the value of the Code field.
   */
  public void setCode(java.lang.String value);
  
  
  /**
   * Sets the value of the IncludesCost field.
   */
  public void setIncludesCost(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the Name field.
   */
  public void setName(java.lang.String value);
  
  
  /**
   * Sets the value of the Name_L10N_ARRAY field.
   */
  public void setName_L10N_ARRAY(entity.CalcRoutineParameterSet_Name_L10N[] value);
  
  
  /**
   * Sets the value of the Parameters field.
   */
  public void setParameters(entity.CalcRoutineParameter[] value);
  
  
  /**
   * Sets the value of the PolicyLinePatternCode field.
   */
  public void setPolicyLinePatternCode(java.lang.String value);
  
  
  
}