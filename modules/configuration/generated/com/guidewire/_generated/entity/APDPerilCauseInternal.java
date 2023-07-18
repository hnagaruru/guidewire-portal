package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "APDPerilCause.eti;APDPerilCause.eix;APDPerilCause.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface APDPerilCauseInternal extends com.guidewire._generated.entity.RetireableInternal {
  /**
   * Gets the value of the LossCause field.
   * The cause of loss that can result in a claim for this peril
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.APDLossCause getLossCause();
  
  
  public gw.pl.persistence.core.Key getLossCauseID();
  
  
  /**
   * Gets the value of the Peril field.
   * The peril that owns this link
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.APDPeril getPeril();
  
  
  public gw.pl.persistence.core.Key getPerilID();
  
  
  /**
   * Sets the value of the LossCause field.
   */
  public void setLossCause(entity.APDLossCause value);
  
  
  public void setLossCauseID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the Peril field.
   */
  public void setPeril(entity.APDPeril value);
  
  
  public void setPerilID(gw.pl.persistence.core.Key value);
  
  
  
}