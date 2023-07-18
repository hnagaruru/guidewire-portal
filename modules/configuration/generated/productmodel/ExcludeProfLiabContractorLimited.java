package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GLLine/coveragepatterns/ExcludeProfLiabContractorLimited.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class ExcludeProfLiabContractorLimited extends entity.GeneralLiabilityExcl {
  protected ExcludeProfLiabContractorLimited()  {
    super((java.lang.Void)null);
  }
  
  public ExcludeProfLiabContractorLimited(entity.PolicyPeriod branch)  {
    super(branch, "ExcludeProfLiabContractorLimited");
  }
  
  public ExcludeProfLiabContractorLimited(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "ExcludeProfLiabContractorLimited");
  }
  
  static {
    com.guidewire._generated.productmodel.ExcludeProfLiabContractorLimitedInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.ExcludeProfLiabContractorLimited>() {
      public productmodel.ExcludeProfLiabContractorLimited newEmptyInstance() {
        return new productmodel.ExcludeProfLiabContractorLimited();
      }
      
      
    });
  }
}