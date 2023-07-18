package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BOPLine/coveragepatterns/BOPVacancyChangeCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class BOPVacancyChangeCov extends entity.BOPBuildingCov {
  protected BOPVacancyChangeCov()  {
    super((java.lang.Void)null);
  }
  
  public BOPVacancyChangeCov(entity.PolicyPeriod branch)  {
    super(branch, "BOPVacancyChangeCov");
  }
  
  public BOPVacancyChangeCov(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "BOPVacancyChangeCov");
  }
  
  public productmodel.DirectBOPVacancyChangeType getBOPVacancyChangeTerm() {
    return (productmodel.DirectBOPVacancyChangeType)getCovTerm("BOPVacancyChange");
  }
  
  public boolean getHasBOPVacancyChangeTerm() {
    return hasCovTerm("BOPVacancyChange");
  }
  
  static {
    com.guidewire._generated.productmodel.BOPVacancyChangeCovInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.BOPVacancyChangeCov>() {
      public productmodel.BOPVacancyChangeCov newEmptyInstance() {
        return new productmodel.BOPVacancyChangeCov();
      }
      
      
    });
  }
}