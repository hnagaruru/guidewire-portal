package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/HOPLine/coveragepatterns/HOPVolcanicAction.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class HOPVolcanicAction extends entity.HOPDwellingCov {
  protected HOPVolcanicAction()  {
    super((java.lang.Void)null);
  }
  
  public HOPVolcanicAction(entity.PolicyPeriod branch)  {
    super(branch, "z1bg07ii0pfa4cj02al1n88sgeb");
  }
  
  public HOPVolcanicAction(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "z1bg07ii0pfa4cj02al1n88sgeb");
  }
  
  static {
    com.guidewire._generated.productmodel.HOPVolcanicActionInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.HOPVolcanicAction>() {
      public productmodel.HOPVolcanicAction newEmptyInstance() {
        return new productmodel.HOPVolcanicAction();
      }
      
      
    });
  }
}