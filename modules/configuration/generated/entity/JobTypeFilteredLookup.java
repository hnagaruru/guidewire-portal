package entity;

/**
 * JobTypeFilteredLookup
 * Delegate for availability lookup entities where JobType is an optional restriction.
 */
@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "JobTypeFilteredLookup.eti;JobTypeFilteredLookup.eix;JobTypeFilteredLookup.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.internal.gosu.parser.ExtendedType
@gw.lang.SimplePropertyProcessing
public interface JobTypeFilteredLookup extends gw.pl.persistence.core.Bean {
  public static final gw.pl.persistence.type.EntityTypeReference<entity.JobTypeFilteredLookup> TYPE = new com.guidewire.commons.metadata.types.EntityIntrinsicTypeReference<entity.JobTypeFilteredLookup>("entity.JobTypeFilteredLookup");
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> JOBTYPE_DYNPROP = new com.guidewire.commons.metadata.types.TypekeyDynPropertyInfo("JobType", "JobType");
  
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