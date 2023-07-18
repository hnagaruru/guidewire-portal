package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "HOPLineScheduleExcl.eti;HOPLineScheduleExcl.eix;HOPLineScheduleExcl.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class HOPLineScheduleExclVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.HOPLineScheduleExclVersionList {
  public HOPLineScheduleExclVersionListImpl(entity.HOPLineScheduleExcl base)  {
    super(base);
  }
  
  public HOPLineScheduleExclVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.HOPLineScheduleExcl AsOf(java.util.Date date) {
    return (entity.HOPLineScheduleExcl)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.HOPLineScheduleExclItem> HOPLineScheduledItemsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.HOPLineScheduleExcl.HOPLINESCHEDULEDITEMS_PROP.get(), date);
  }
  
  @java.lang.Override
  public void addToHOPLineScheduledItems(entity.HOPLineScheduleExclItem bean) {
    addToArray(entity.HOPLineScheduleExcl.HOPLINESCHEDULEDITEMS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.HOPLineScheduleExcl> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.HOPLineScheduleExclItemVersionList> getHOPLineScheduledItems() {
    return (java.util.List)getArray(entity.HOPLineScheduleExcl.HOPLINESCHEDULEDITEMS_PROP.get());
  }
  
  
}