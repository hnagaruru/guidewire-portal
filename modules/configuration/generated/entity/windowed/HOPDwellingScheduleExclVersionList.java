package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "HOPDwellingScheduleExcl.eti;HOPDwellingScheduleExcl.eix;HOPDwellingScheduleExcl.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface HOPDwellingScheduleExclVersionList extends entity.windowed.HOPDwellingExclVersionList {
  entity.HOPDwellingScheduleExcl AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.HOPDwellScheduleExclItem> HOPDwellScheduledItemsAsOf(java.util.Date date);
  
  
  void addToHOPDwellScheduledItems(entity.HOPDwellScheduleExclItem bean);
  
  
  java.util.List<? extends entity.HOPDwellingScheduleExcl> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.HOPDwellScheduleExclItemVersionList> getHOPDwellScheduledItems();
  
  
  
}