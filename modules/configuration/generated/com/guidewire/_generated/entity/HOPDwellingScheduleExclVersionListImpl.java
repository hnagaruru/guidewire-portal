package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "HOPDwellingScheduleExcl.eti;HOPDwellingScheduleExcl.eix;HOPDwellingScheduleExcl.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class HOPDwellingScheduleExclVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.HOPDwellingScheduleExclVersionList {
  public HOPDwellingScheduleExclVersionListImpl(entity.HOPDwellingScheduleExcl base)  {
    super(base);
  }
  
  public HOPDwellingScheduleExclVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.HOPDwellingScheduleExcl AsOf(java.util.Date date) {
    return (entity.HOPDwellingScheduleExcl)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.HOPDwellScheduleExclItem> HOPDwellScheduledItemsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.HOPDwellingScheduleExcl.HOPDWELLSCHEDULEDITEMS_PROP.get(), date);
  }
  
  @java.lang.Override
  public void addToHOPDwellScheduledItems(entity.HOPDwellScheduleExclItem bean) {
    addToArray(entity.HOPDwellingScheduleExcl.HOPDWELLSCHEDULEDITEMS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.HOPDwellingScheduleExcl> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.HOPDwellScheduleExclItemVersionList> getHOPDwellScheduledItems() {
    return (java.util.List)getArray(entity.HOPDwellingScheduleExcl.HOPDWELLSCHEDULEDITEMS_PROP.get());
  }
  
  
}