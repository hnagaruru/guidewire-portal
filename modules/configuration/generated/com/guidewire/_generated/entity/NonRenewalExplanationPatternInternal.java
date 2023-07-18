package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "NonRenewalExplanationPattern.eti;NonRenewalExplanationPattern.eix;NonRenewalExplanationPattern.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface NonRenewalExplanationPatternInternal extends com.guidewire._generated.entity.RetireableInternal, com.guidewire._generated.entity.SimpleEffDatedInternal, com.guidewire.pc.domain.job.NonRenewalExplanationPatternPublicMethods {
  /**
   * Adds the given element to the Body_L10N_ARRAY array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToBody_L10N_ARRAY(entity.NonRenewalExplanationPattern_Body_L10N element);
  
  
  /**
   * Adds the given element to the Code_L10N_ARRAY array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToCode_L10N_ARRAY(entity.NonRenewalExplanationPattern_Code_L10N element);
  
  
  /**
   * Gets the value of the Body field.
   * Explanation for the non-renewal
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getBody();
  
  
  /**
   * Gets the value of the Body_L10N_ARRAY field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.NonRenewalExplanationPattern_Body_L10N[] getBody_L10N_ARRAY();
  
  
  /**
   * Array association for partition Body_L10N_ARRAYByLanguage on array Body_L10N_ARRAY
   */
  public entity.NonRenewalExplanationPattern_Body_L10N getBody_L10N_ARRAYByLanguage(com.guidewire.commons.entity.type2.IAssociativeArrayPropertyInfo property);
  
  
  /**
   * Gets the value of the Code field.
   * The concise name of the non-renewal explanation pattern
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getCode();
  
  
  /**
   * Gets the value of the Code_L10N_ARRAY field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.NonRenewalExplanationPattern_Code_L10N[] getCode_L10N_ARRAY();
  
  
  /**
   * Array association for partition Code_L10N_ARRAYByLanguage on array Code_L10N_ARRAY
   */
  public entity.NonRenewalExplanationPattern_Code_L10N getCode_L10N_ARRAYByLanguage(com.guidewire.commons.entity.type2.IAssociativeArrayPropertyInfo property);
  
  
  /**
   * Removes the given element from the Body_L10N_ARRAY array. This is achieved by marking the element for removal.
   */
  public void removeFromBody_L10N_ARRAY(entity.NonRenewalExplanationPattern_Body_L10N element);
  
  
  /**
   * Removes the given element from the Body_L10N_ARRAY array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromBody_L10N_ARRAY(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the Code_L10N_ARRAY array. This is achieved by marking the element for removal.
   */
  public void removeFromCode_L10N_ARRAY(entity.NonRenewalExplanationPattern_Code_L10N element);
  
  
  /**
   * Removes the given element from the Code_L10N_ARRAY array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromCode_L10N_ARRAY(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Sets the value of the Body field.
   */
  public void setBody(java.lang.String value);
  
  
  /**
   * Sets the value of the Body_L10N_ARRAY field.
   */
  public void setBody_L10N_ARRAY(entity.NonRenewalExplanationPattern_Body_L10N[] value);
  
  
  /**
   * Sets the value of the Code field.
   */
  public void setCode(java.lang.String value);
  
  
  /**
   * Sets the value of the Code_L10N_ARRAY field.
   */
  public void setCode_L10N_ARRAY(entity.NonRenewalExplanationPattern_Code_L10N[] value);
  
  
  
}