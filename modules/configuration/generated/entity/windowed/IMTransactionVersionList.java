package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "IMTransaction.eti;IMTransaction.eix;IMTransaction.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface IMTransactionVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  entity.IMTransaction AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.IMTransaction> getAllVersions();
  
  
  
}