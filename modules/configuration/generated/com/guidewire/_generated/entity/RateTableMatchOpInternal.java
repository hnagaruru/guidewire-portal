package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "RateTableMatchOp.eti;RateTableMatchOp.eix;RateTableMatchOp.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface RateTableMatchOpInternal extends com.guidewire._generated.entity.RetireableInternal, com.guidewire.pc.domain.rating.RateTableMatchOpPublicMethods, com.guidewire.pc.domain.rating.impl.RateTableMatchOpInternalMethods {
  /**
   * Adds the given element to the ArgumentSources array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToArgumentSources(entity.RateTableArgumentSource element);
  
  
  /**
   * Adds the given element to the DisplayText_L10N_ARRAY array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToDisplayText_L10N_ARRAY(entity.RateTableMatchOp_DisplayText_L10N element);
  
  
  /**
   * Adds the given element to the Params array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToParams(entity.RateTableColumn element);
  
  
  /**
   * Gets the value of the ArgumentSources field.
   * The Argument Sources that refer to this matchop
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.RateTableArgumentSource[] getArgumentSources();
  
  
  /**
   * Gets the value of the Definition field.
   * Foreign Key to Rate Table Definition
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.RateTableDefinition getDefinition();
  
  
  public gw.pl.persistence.core.Key getDefinitionID();
  
  
  /**
   * Gets the value of the DisplayText field.
   * Localizable text displayed in UI for this operation
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getDisplayText();
  
  
  /**
   * Gets the value of the DisplayText_L10N_ARRAY field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.RateTableMatchOp_DisplayText_L10N[] getDisplayText_L10N_ARRAY();
  
  
  /**
   * Array association for partition DisplayText_L10N_ARRAYByLanguage on array DisplayText_L10N_ARRAY
   */
  public entity.RateTableMatchOp_DisplayText_L10N getDisplayText_L10N_ARRAYByLanguage(com.guidewire.commons.entity.type2.IAssociativeArrayPropertyInfo property);
  
  
  /**
   * Gets the value of the MatchOpDefinition field.
   * Foreign Key to Match Operation Definition
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.RateTableMatchOpDefinition getMatchOpDefinition();
  
  
  public gw.pl.persistence.core.Key getMatchOpDefinitionID();
  
  
  /**
   * Gets the value of the Name field.
   * The CODE of this matching operation.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getName();
  
  
  /**
   * Gets the value of the Params field.
   * The list of column definitions for this matching operation
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.RateTableColumn[] getParams();
  
  
  /**
   * Removes the given element from the ArgumentSources array. This is achieved by marking the element for removal.
   */
  public void removeFromArgumentSources(entity.RateTableArgumentSource element);
  
  
  /**
   * Removes the given element from the ArgumentSources array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromArgumentSources(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the DisplayText_L10N_ARRAY array. This is achieved by marking the element for removal.
   */
  public void removeFromDisplayText_L10N_ARRAY(entity.RateTableMatchOp_DisplayText_L10N element);
  
  
  /**
   * Removes the given element from the DisplayText_L10N_ARRAY array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromDisplayText_L10N_ARRAY(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the Params array. This is achieved by marking the element for removal.
   */
  public void removeFromParams(entity.RateTableColumn element);
  
  
  /**
   * Removes the given element from the Params array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromParams(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Sets the value of the ArgumentSources field.
   */
  public void setArgumentSources(entity.RateTableArgumentSource[] value);
  
  
  /**
   * Sets the value of the Definition field.
   */
  public void setDefinition(entity.RateTableDefinition value);
  
  
  public void setDefinitionID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the DisplayText field.
   */
  public void setDisplayText(java.lang.String value);
  
  
  /**
   * Sets the value of the DisplayText_L10N_ARRAY field.
   */
  public void setDisplayText_L10N_ARRAY(entity.RateTableMatchOp_DisplayText_L10N[] value);
  
  
  /**
   * Sets the value of the MatchOpDefinition field.
   */
  public void setMatchOpDefinition(entity.RateTableMatchOpDefinition value);
  
  
  public void setMatchOpDefinitionID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the Name field.
   */
  public void setName(java.lang.String value);
  
  
  /**
   * Sets the value of the Params field.
   */
  public void setParams(entity.RateTableColumn[] value);
  
  
  
}