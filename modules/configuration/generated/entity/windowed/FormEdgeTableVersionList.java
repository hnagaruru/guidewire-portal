package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "FormEdgeTable.eti;FormEdgeTable.eix;FormEdgeTable.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface FormEdgeTableVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  entity.FormEdgeTable AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.FormEdgeTable> getAllVersions();
  
  
  
}