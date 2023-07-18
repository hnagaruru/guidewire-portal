package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "PCOfficialID.eti;PCOfficialID.eix;PCOfficialID.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface PCOfficialIDInternal extends com.guidewire._generated.entity.OfficialIDInternal, com.guidewire.pc.domain.contact.PCOfficialIDPublicMethods, com.guidewire.pc.domain.contact.impl.PCOfficialIDInternalMethods, gw.api.obfuscation.Obfuscator {
  /**
   * Gets the value of the PatternCode field.
   * The pattern defining what kind of OfficialID this is
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getPatternCode();
  
  
  /**
   * Sets the value of the PatternCode field.
   */
  public void setPatternCode(java.lang.String value);
  
  
  
}