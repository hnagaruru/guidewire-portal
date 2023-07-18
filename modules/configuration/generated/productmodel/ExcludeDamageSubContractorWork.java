package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GLLine/coveragepatterns/ExcludeDamageSubContractorWork.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class ExcludeDamageSubContractorWork extends entity.GeneralLiabilityExcl {
  protected ExcludeDamageSubContractorWork()  {
    super((java.lang.Void)null);
  }
  
  public ExcludeDamageSubContractorWork(entity.PolicyPeriod branch)  {
    super(branch, "ExcludeDamageSubContractorWork");
  }
  
  public ExcludeDamageSubContractorWork(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "ExcludeDamageSubContractorWork");
  }
  
  static {
    com.guidewire._generated.productmodel.ExcludeDamageSubContractorWorkInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.ExcludeDamageSubContractorWork>() {
      public productmodel.ExcludeDamageSubContractorWork newEmptyInstance() {
        return new productmodel.ExcludeDamageSubContractorWork();
      }
      
      
    });
  }
}