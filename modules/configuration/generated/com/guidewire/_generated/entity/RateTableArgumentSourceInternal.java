package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "RateTableArgumentSource.eti;RateTableArgumentSource.eix;RateTableArgumentSource.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface RateTableArgumentSourceInternal extends com.guidewire._generated.entity.RetireableInternal {
  /**
   * Gets the value of the ArgumentSource field.
   * The source for the value of this argument
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getArgumentSource();
  
  
  /**
   * Gets the value of the ArgumentSourceSet field.
   * RateTableArgumentSourceSet
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.RateTableArgumentSourceSet getArgumentSourceSet();
  
  
  public gw.pl.persistence.core.Key getArgumentSourceSetID();
  
  
  /**
   * Gets the value of the Parameter field.
   * Parameter (MatchOp) to match against
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.RateTableMatchOp getParameter();
  
  
  public gw.pl.persistence.core.Key getParameterID();
  
  
  /**
   * Gets the value of the Root field.
   * The CalcRoutineParamName for the ArgumentSource if it is an entity or typelist.  Otherwise null.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.CalcRoutineParamName getRoot();
  
  
  /**
   * Gets the value of the IsModifier field.
   * True if the source for this value comes from a Modifier, false otherwise
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isIsModifier();
  
  
  /**
   * Sets the value of the ArgumentSource field.
   */
  public void setArgumentSource(java.lang.String value);
  
  
  /**
   * Sets the value of the ArgumentSourceSet field.
   */
  public void setArgumentSourceSet(entity.RateTableArgumentSourceSet value);
  
  
  public void setArgumentSourceSetID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the IsModifier field.
   */
  public void setIsModifier(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the Parameter field.
   */
  public void setParameter(entity.RateTableMatchOp value);
  
  
  public void setParameterID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the Root field.
   */
  public void setRoot(typekey.CalcRoutineParamName value);
  
  
  
}