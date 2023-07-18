package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "WCFedLiabClassCode.eti;WCFedLiabClassCode.eix;WCFedLiabClassCode.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface WCFedLiabClassCodeInternal extends com.guidewire._generated.entity.RetireableInternal {
  /**
   * Gets the value of the MainClassCode field.
   * The main class code
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.WCClassCode getMainClassCode();
  
  
  public gw.pl.persistence.core.Key getMainClassCodeID();
  
  
  /**
   * Gets the value of the StateActClassCode field.
   * The State Act class code
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.WCClassCode getStateActClassCode();
  
  
  public gw.pl.persistence.core.Key getStateActClassCodeID();
  
  
  /**
   * Gets the value of the USLActClassCode field.
   * The USL Act class code
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.WCClassCode getUSLActClassCode();
  
  
  public gw.pl.persistence.core.Key getUSLActClassCodeID();
  
  
  /**
   * Sets the value of the MainClassCode field.
   */
  public void setMainClassCode(entity.WCClassCode value);
  
  
  public void setMainClassCodeID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the StateActClassCode field.
   */
  public void setStateActClassCode(entity.WCClassCode value);
  
  
  public void setStateActClassCodeID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the USLActClassCode field.
   */
  public void setUSLActClassCode(entity.WCClassCode value);
  
  
  public void setUSLActClassCodeID(gw.pl.persistence.core.Key value);
  
  
  
}