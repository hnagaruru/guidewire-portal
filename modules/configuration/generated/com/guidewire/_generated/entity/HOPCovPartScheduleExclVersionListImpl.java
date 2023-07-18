package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "HOPCovPartScheduleExcl.eti;HOPCovPartScheduleExcl.eix;HOPCovPartScheduleExcl.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class HOPCovPartScheduleExclVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.HOPCovPartScheduleExclVersionList {
  public HOPCovPartScheduleExclVersionListImpl(entity.HOPCovPartScheduleExcl base)  {
    super(base);
  }
  
  public HOPCovPartScheduleExclVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.HOPCovPartScheduleExcl AsOf(java.util.Date date) {
    return (entity.HOPCovPartScheduleExcl)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.HOPCovPartSchExclItem> HOPCovPartScheduledItemsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.HOPCovPartScheduleExcl.HOPCOVPARTSCHEDULEDITEMS_PROP.get(), date);
  }
  
  @java.lang.Override
  public void addToHOPCovPartScheduledItems(entity.HOPCovPartSchExclItem bean) {
    addToArray(entity.HOPCovPartScheduleExcl.HOPCOVPARTSCHEDULEDITEMS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.HOPCovPartScheduleExcl> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.HOPCovPartSchExclItemVersionList> getHOPCovPartScheduledItems() {
    return (java.util.List)getArray(entity.HOPCovPartScheduleExcl.HOPCOVPARTSCHEDULEDITEMS_PROP.get());
  }
  
  
}