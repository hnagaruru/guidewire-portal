package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "StateDrivenLookup.eti;StateDrivenLookup.eix;StateDrivenLookup.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface StateDrivenLookupInternal extends com.guidewire.pl.domain.persistence.core.impl.BeanInternal {
  /**
   * Gets the value of the State field.
   * The state for which this lookup applies, or null if the lookup is not restricted by state
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.Jurisdiction getState();
  
  
  /**
   * Sets the value of the State field.
   */
  public void setState(typekey.Jurisdiction value);
  
  
  
}