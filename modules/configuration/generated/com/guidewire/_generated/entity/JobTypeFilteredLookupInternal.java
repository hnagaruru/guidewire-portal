package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "JobTypeFilteredLookup.eti;JobTypeFilteredLookup.eix;JobTypeFilteredLookup.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface JobTypeFilteredLookupInternal extends com.guidewire.pl.domain.persistence.core.impl.BeanInternal {
  /**
   * Gets the value of the JobType field.
   * The job type for which this lookup applies, or null if the lookup is not restricted by job type
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.Job getJobType();
  
  
  /**
   * Sets the value of the JobType field.
   */
  public void setJobType(typekey.Job value);
  
  
  
}