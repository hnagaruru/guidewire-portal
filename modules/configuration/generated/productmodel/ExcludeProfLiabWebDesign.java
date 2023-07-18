package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GLLine/coveragepatterns/ExcludeProfLiabWebDesign.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class ExcludeProfLiabWebDesign extends entity.GeneralLiabilityExcl {
  protected ExcludeProfLiabWebDesign()  {
    super((java.lang.Void)null);
  }
  
  public ExcludeProfLiabWebDesign(entity.PolicyPeriod branch)  {
    super(branch, "ExcludeProfLiabWebDesign");
  }
  
  public ExcludeProfLiabWebDesign(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "ExcludeProfLiabWebDesign");
  }
  
  static {
    com.guidewire._generated.productmodel.ExcludeProfLiabWebDesignInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.ExcludeProfLiabWebDesign>() {
      public productmodel.ExcludeProfLiabWebDesign newEmptyInstance() {
        return new productmodel.ExcludeProfLiabWebDesign();
      }
      
      
    });
  }
}