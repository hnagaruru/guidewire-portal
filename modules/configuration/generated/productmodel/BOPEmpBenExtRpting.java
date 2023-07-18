package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BOPLine/coveragepatterns/BOPEmpBenExtRpting.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class BOPEmpBenExtRpting extends entity.BusinessOwnersCov {
  protected BOPEmpBenExtRpting()  {
    super((java.lang.Void)null);
  }
  
  public BOPEmpBenExtRpting(entity.PolicyPeriod branch)  {
    super(branch, "BOPEmpBenExtRpting");
  }
  
  public BOPEmpBenExtRpting(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "BOPEmpBenExtRpting");
  }
  
  static {
    com.guidewire._generated.productmodel.BOPEmpBenExtRptingInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.BOPEmpBenExtRpting>() {
      public productmodel.BOPEmpBenExtRpting newEmptyInstance() {
        return new productmodel.BOPEmpBenExtRpting();
      }
      
      
    });
  }
}