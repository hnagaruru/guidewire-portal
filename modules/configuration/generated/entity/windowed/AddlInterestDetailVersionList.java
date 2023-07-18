package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "AddlInterestDetail.eti;AddlInterestDetail.eix;AddlInterestDetail.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface AddlInterestDetailVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  entity.AddlInterestDetail AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.AddlInterestDetail> getAllVersions();
  
  
  
}