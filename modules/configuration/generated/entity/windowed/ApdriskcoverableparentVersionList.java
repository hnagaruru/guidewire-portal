package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "Apdriskcoverableparent.eti;Apdriskcoverableparent.eix;Apdriskcoverableparent.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface ApdriskcoverableparentVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  entity.Apdriskcoverableparent AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.Apdriskcoverableparent> getAllVersions();
  
  
  
}