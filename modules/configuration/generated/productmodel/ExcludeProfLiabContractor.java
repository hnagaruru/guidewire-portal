package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GLLine/coveragepatterns/ExcludeProfLiabContractor.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class ExcludeProfLiabContractor extends entity.GeneralLiabilityExcl {
  protected ExcludeProfLiabContractor()  {
    super((java.lang.Void)null);
  }
  
  public ExcludeProfLiabContractor(entity.PolicyPeriod branch)  {
    super(branch, "ExcludeProfLiabContractor");
  }
  
  public ExcludeProfLiabContractor(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "ExcludeProfLiabContractor");
  }
  
  static {
    com.guidewire._generated.productmodel.ExcludeProfLiabContractorInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.ExcludeProfLiabContractor>() {
      public productmodel.ExcludeProfLiabContractor newEmptyInstance() {
        return new productmodel.ExcludeProfLiabContractor();
      }
      
      
    });
  }
}