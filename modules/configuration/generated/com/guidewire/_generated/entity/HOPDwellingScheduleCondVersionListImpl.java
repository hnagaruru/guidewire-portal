package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "HOPDwellingScheduleCond.eti;HOPDwellingScheduleCond.eix;HOPDwellingScheduleCond.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class HOPDwellingScheduleCondVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.HOPDwellingScheduleCondVersionList {
  public HOPDwellingScheduleCondVersionListImpl(entity.HOPDwellingScheduleCond base)  {
    super(base);
  }
  
  public HOPDwellingScheduleCondVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.HOPDwellingScheduleCond AsOf(java.util.Date date) {
    return (entity.HOPDwellingScheduleCond)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.HOPDwellScheduleCondItem> HOPDwellScheduledItemsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.HOPDwellingScheduleCond.HOPDWELLSCHEDULEDITEMS_PROP.get(), date);
  }
  
  @java.lang.Override
  public void addToHOPDwellScheduledItems(entity.HOPDwellScheduleCondItem bean) {
    addToArray(entity.HOPDwellingScheduleCond.HOPDWELLSCHEDULEDITEMS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.HOPDwellingScheduleCond> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.HOPDwellScheduleCondItemVersionList> getHOPDwellScheduledItems() {
    return (java.util.List)getArray(entity.HOPDwellingScheduleCond.HOPDWELLSCHEDULEDITEMS_PROP.get());
  }
  
  
}