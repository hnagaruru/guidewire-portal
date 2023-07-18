package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GLLine/coveragepatterns/ExcludeRiotCivilCommotion.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class ExcludeRiotCivilCommotion extends entity.GeneralLiabilityExcl {
  protected ExcludeRiotCivilCommotion()  {
    super((java.lang.Void)null);
  }
  
  public ExcludeRiotCivilCommotion(entity.PolicyPeriod branch)  {
    super(branch, "ExcludeRiotCivilCommotion");
  }
  
  public ExcludeRiotCivilCommotion(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "ExcludeRiotCivilCommotion");
  }
  
  static {
    com.guidewire._generated.productmodel.ExcludeRiotCivilCommotionInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.ExcludeRiotCivilCommotion>() {
      public productmodel.ExcludeRiotCivilCommotion newEmptyInstance() {
        return new productmodel.ExcludeRiotCivilCommotion();
      }
      
      
    });
  }
}