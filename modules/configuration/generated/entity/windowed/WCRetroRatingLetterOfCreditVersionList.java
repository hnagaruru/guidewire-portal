package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "WCRetroRatingLetterOfCredit.eti;WCRetroRatingLetterOfCredit.eix;WCRetroRatingLetterOfCredit.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface WCRetroRatingLetterOfCreditVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  entity.WCRetroRatingLetterOfCredit AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.WCRetroRatingLetterOfCredit> getAllVersions();
  
  
  
}